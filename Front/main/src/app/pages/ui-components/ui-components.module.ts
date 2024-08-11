import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { UiComponentsRoutes } from './ui-components.routing';

// ui components
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AppBadgeComponent2 } from './badge copy/badge.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskDialogComponent } from './taskboard/task-dialog.component';
import { OkAppTaskComponent } from './taskboard/ok-task/ok-task.component';
import { DeleteAppTaskComponent } from './taskboard/delete-task/delete-task.component';
import { AppChatComponent } from './chat/chat.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { AppPaginationTableComponent } from './pagination-table/pagination-table.component';
import { AppHttpTableComponent } from './Usuarios/http-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiComponentsRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
    MatDialogModule,
    DragDropModule,
    MatNativeDateModule,
    NgScrollbarModule,
    MatIconModule,


    
  ],
  declarations: [
    AppBadgeComponent,
    AppBadgeComponent2,
    TaskDialogComponent,
    OkAppTaskComponent,
    DeleteAppTaskComponent,
    AppChatComponent,
    AppTaskboardComponent,
    AppChipsComponent,
    AppListsComponent,
    AppMenuComponent,
    AppTooltipsComponent,
    
  ],
})
export class UicomponentsModule {}
