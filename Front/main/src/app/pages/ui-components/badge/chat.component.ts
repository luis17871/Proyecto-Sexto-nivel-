// import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import { messages } from './chat-data';
// import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ScrollingModule } from '@angular/cdk/scrolling';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatCardModule } from '@angular/material/card';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatDividerModule } from '@angular/material/divider';
// import { TablerIconsModule } from 'angular-tabler-icons';
// import { NgScrollbarModule } from 'ngx-scrollbar';
// import { MensajeIa } from 'src/interfaces/messages';
// import { ChatStreamResponse, CohereChatRequest } from 'src/interfaces/ia.interface';
// import { MessageService } from 'src/app/services/mesagges.service';
// import { CohereService } from 'src/app/services/ia.service';

// @Component({
//   selector: 'app-badge', // Cambiado a 'app-badge'
//   standalone: true,
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.scss'],
//   imports: [
//     RouterModule,
//     FormsModule,
//     ReactiveFormsModule,
//     ScrollingModule,
//     BrowserAnimationsModule,
//     MatCardModule,
//     MatSidenavModule,
//     MatToolbarModule,
//     MatButtonModule,
//     MatIconModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatDividerModule,
//     TablerIconsModule,
//     NgScrollbarModule,
//   ],
// })
// export class AppBadgeComponent implements OnInit {
//   sidePanelOpened = true;
//   msg = '';
//   mensaje: MensajeIa = { msg: '' }; // Valor predeterminado
//   pedido: CohereChatRequest | undefined;
//   respuesta: ChatStreamResponse[] | undefined;
//   selectedMessage: any;
//   public messages: Array<any> = messages;

//   constructor(
//     private mensajeIa: MessageService,
//     private ia: CohereService,
//   ) {
//     this.selectedMessage = this.messages[0];
//   }

//   @ViewChild('myInput', { static: true }) myInput: ElementRef = Object.create(null);

//   ngOnInit(): void {
//     // Lógica de inicialización si es necesaria
//   }

//   isOver(): boolean {
//     return window.matchMedia(`(max-width: 960px)`).matches;
//   }

//   onSelect(message: Object[]): void {
//     this.selectedMessage = message;
//   }

//   OnAddMsg(): void {
//     this.msg = this.myInput.nativeElement.value;

//     if (this.msg !== '') {
//       this.selectedMessage.chat.push({
//         type: 'even',
//         msg: this.msg,
//         date: new Date(),
//       });

//       this.pedido = {
//         message: this.msg,
//         temperature: 0.8,
//         model: "command-r-plus",
//         preamble: "You are an assistant for the repair department in a company in charge of repair and maintenance of computers and electronic equipment and respond in Spanish",
//         promptTruncation: 'AUTO'
//       };

//       this.ia.chatStream(this.pedido).subscribe({
//         next: response => {
//           console.log(response); // Imprime la respuesta del servicio
//           this.mensaje = this.mensajeIa.getMesage();
//           console.log(this.mensaje); // Imprime el mensaje obtenido
//           if (this.mensaje.msg) {
//             this.selectedMessage.chat.push({
//               type: 'odd',
//               msg: this.mensaje.msg,
//               date: new Date(),
//             });
//           } else {
//             console.log('mensaje de la respuesta nulo');
//           }
//         },
//         error: err => {
//           console.error('Error al llamar al servicio:', err);
//         }
//       });
//     }

//     this.myInput.nativeElement.value = '';
//   }
// }
