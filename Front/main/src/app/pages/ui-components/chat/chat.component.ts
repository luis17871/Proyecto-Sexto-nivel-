import { Component, ViewChild, ElementRef, NgModule, NgModuleRef } from '@angular/core';
import { messages } from './chat-data';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppModule } from 'src/app/app.module';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgScrollbarModule } from 'ngx-scrollbar';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterModule, MaterialModule, FormsModule, ReactiveFormsModule, TablerIconsModule, ScrollingModule, AppModule, MatCardModule, MatSidenavModule, ScrollingModule,
    ScrollingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    ScrollingModule,
    TablerIconsModule,
    NgScrollbarModule,
  ],
  templateUrl: './chat.component.html',
})
export class AppChatComponent  {
  sidePanelOpened = true;
  msg = '';
  hidden = false;


  // MESSAGE
  selectedMessage: any;

  public messages: Array<any> = messages;
  // tslint:disable-next-line - Disables all
  // messages: Object[] = messages;

  constructor() {
    this.selectedMessage = this.messages[0];
  }

  @ViewChild('myInput', { static: true }) myInput: ElementRef =
    Object.create(null);

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  // tslint:disable-next-line - Disables all
  onSelect(message: Object[]): void {
    this.selectedMessage = message;
  }

  OnAddMsg(): void {
    this.msg = this.myInput.nativeElement.value;

    if (this.msg !== '') {
      this.selectedMessage.chat.push({
        type: 'even',
        msg: this.msg,
        date: new Date(),
      });
    }

    this.myInput.nativeElement.value = '';
  }
}
