import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';
import { UiComponentsRoutes } from './ui-components.routing';
import { MatNativeDateModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppBadgeComponent } from './badge/badge.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, // CommonModule en lugar de BrowserModule
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    ScrollingModule,
    BrowserAnimationsModule,
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
    NgScrollbarModule,
  ],
  declarations: [
    AppBadgeComponent
  ],
  exports: [
    AppBadgeComponent
  ],
})
export class UicomponentsModule {}
