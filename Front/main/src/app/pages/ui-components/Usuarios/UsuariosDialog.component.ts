import { CommonModule, DatePipe } from "@angular/common";
import { Component, Inject, Optional } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { TablerIconsModule } from "angular-tabler-icons";
import { MaterialModule } from "src/app/material.module";
import { Usuario } from "src/interfaces/usuario.interface";

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'app-dialog-content',
  imports:[MaterialModule, CommonModule, TablerIconsModule,FormsModule],
  standalone: true,
    templateUrl: 'modal.html',
  })
  // tslint:disable-next-line: component-class-suffix
  export class AppKichenSinkDialogContentComponent {
    action: string;
    // tslint:disable-next-line - Disables all
    local_data: any;
    // selectedImage: any = '';
    joiningDate: any = '';
roles: any;
  
    constructor(
      public datePipe: DatePipe,
      public dialogRef: MatDialogRef<AppKichenSinkDialogContentComponent>,
      // @Optional() is used to prevent error if no data is passed
      @Optional() @Inject(MAT_DIALOG_DATA) public data: Usuario,
    ) {
      this.local_data = { ...data };
      this.action = this.local_data.action;
      // if (this.local_data.DateOfJoining !== undefined) {
      //   this.joiningDate = this.datePipe.transform(
      //     new Date(this.local_data.DateOfJoining),
      //     'yyyy-MM-dd',
      //   );
      // }
      // if (this.local_data.imagePath === undefined) {
      //   // this.local_data.imagePath = 'assets/images/profile/user-1.jpg';
      // }
    }
  
    doAction(): void {
      this.dialogRef.close({ event: this.action, data: this.local_data });
    }
    closeDialog(): void {
      this.dialogRef.close({ event: 'Cancel' });
    }
  
    
  }
  