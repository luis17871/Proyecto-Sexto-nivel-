import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewChild, AfterViewInit, Inject, Optional, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TablerIconsModule } from 'angular-tabler-icons';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MaterialModule } from 'src/app/material.module';
import { Usuario } from 'src/interfaces/usuario.interface';
import { UsuarioService } from 'src/services/usuario.service';


@Component({
  selector: 'app-http-table',
  imports: [MaterialModule, CommonModule, TablerIconsModule, FormsModule],
  standalone: true,
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.scss']
})
export class AppGruposTableComponent implements AfterViewInit {


  displayedColumns: string[] = ['nombre', 'apellido', 'rol', 'email', 'estado', 'acciones'];
  data: Usuario[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usuarioService: UsuarioService,
    public dialog: MatDialog,
  ) { }
  loadAll(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.usuarioService.todos();
        }),
        map((data) => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        }),
      )
      .subscribe((data) => (this.data = data));
    
  }
  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
   this.loadAll();
  }
  openDialog(id: string): void {
    if (id) {
      // Si se proporciona un id, obtén los datos del usuario usando el servicio UsuarioService
      this.usuarioService.get(id).subscribe((usuario: Usuario) => {
        // Abre el diálogo y pasa los datos del usuario como datos del diálogo
        const dialogRef = this.dialog.open(AppKichenSinkDialogContentComponent2, {
          data: usuario
          
        });

        // Suscribe a afterClosed() para manejar cualquier lógica después de que se cierre el diálogo
        dialogRef.afterClosed().subscribe((result) => {
          console.log(result);
        console.log(result.data);
        this.save(result.data);
          // Aquí puedes manejar cualquier lógica después de que se cierre el diálogo
        });
      });
    } else {
      // Si no se proporciona un id, simplemente abre el diálogo sin datos
      const dialogRef = this.dialog.open(AppKichenSinkDialogContentComponent2);

      // Suscribe a afterClosed() para manejar cualquier lógica después de que se cierre el diálogo
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        console.log(result.data);
        this.save(result.data);
        // Aquí puedes manejar cualquier lógica después de que se cierre el diálogo
      });
    }
  }
  
  
  
  save(usuario: Usuario): void {
    console.log(usuario);
    console.log("entro");
    if (usuario.id) {
      // Si se proporciona un id, actualiza los datos del usuario usando el servicio UsuarioService
      this.usuarioService.update(usuario).subscribe((response) => {
        console.log(response);
      this.loadAll();

      });
    } else {
      // Si no se proporciona un id, crea un nuevo usuario usando el servicio UsuarioService
      this.usuarioService.create(usuario).subscribe((response) => {
        console.log(response);
      this.loadAll();

      });
    }
  }
 
  
  delete(id: string): void {
    this.usuarioService.delete(id).subscribe(() => {
      this.loadAll();
    });
  }
}

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-dialog-content2',
imports:[MaterialModule, CommonModule, TablerIconsModule, FormsModule],
standalone: true,
  templateUrl: 'modal.html',
})
// tslint:disable-next-line: component-class-suffix
export class AppKichenSinkDialogContentComponent2 {
  action: string = "";
  // tslint:disable-next-line - Disables all
  local_data: any;
  // selectedImage: any = '';
  joiningDate: any = '';
  roles: string[] = ['ADMINISTRADOR', 'ENTRENADOR', 'RECEPCION'];


  constructor(
    public dialogRef: MatDialogRef<AppKichenSinkDialogContentComponent2>,
    // @Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Usuario,
  ) {
    this.local_data = { ...data };
    console.log(this.local_data.rol);
    this.local_data.rol = this.getAdminRole();
    console.log(this.local_data.rol);
    // this.action = this.local_data.action;
    
  }

  doAction(): void {
    console.log("Datos a guardar:", this.local_data);
    this.dialogRef.close({  data: this.local_data });
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  
// app-kichen-sink-dialog-content.component.ts
// rol: { authority: string }[] = [];

getAdminRole(): string {
  // Verificar si se han cargado datos en local_data.rol
  if (!this.local_data || !this.local_data.rol) {
    console.error('No se han cargado los datos correctamente.');
    return '';
  }
  
  // Definir los roles que queremos buscar
  const rolesABuscar = ['ADMINISTRADOR', 'ENTRENADOR', 'RECEPCION'];

  // Buscar entre los roles definidos
  for (const role of rolesABuscar) {
    const foundRole = this.local_data.rol.find((rol: { authority: string }) => rol.authority === `ROLE_${role}`);
    if (foundRole) {
      return role;
    }
  }

  // Si ninguno de los roles está presente, devolver una cadena vacía
  return '';
}






  
}
