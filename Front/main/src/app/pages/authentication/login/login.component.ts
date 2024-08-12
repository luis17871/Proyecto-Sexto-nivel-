import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  nombreUsuario: string = '';
  Password: string = '';

  form = new FormGroup({
    nombreUsuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.form.valid) {
      this.nombreUsuario = this.form.value.nombreUsuario ?? ''; // Asignar valor a la variable de la clase
      this.Password = this.form.value.password ?? ''; // Asignar valor a la variable de la clase
      
      this.usuarioService.login(this.nombreUsuario, this.Password).subscribe(
        (res) => {
          // this.router.navigate(['/dashboard']);
          console.log('Login successful:', res);
        },
        (error) => {
          console.error('Error during login:', error);
        }
      );
    }
  }
}
