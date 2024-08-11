import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { AppBadgeComponent2 } from './badge copy/badge.component';
import { AppTaskboardComponent } from './taskboard/taskboard.component';
import { AppChatComponent } from './chat/chat.component';
import { AppPaginationTableComponent } from './pagination-table/pagination-table.component';
import { AppHttpTableComponent } from './Usuarios/http-table.component';
import { AppGruposTableComponent } from './Grupos/http-table.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'prueba',
        component: AppBadgeComponent2,
      },
      {
        path: 'tabla',
        component: AppPaginationTableComponent, 
      },
      {
        path: 'task',
        component: AppTaskboardComponent,
      },
      {
        path: 'user',
    component: AppHttpTableComponent,
      },
      {
        path: 'group',
    component: AppGruposTableComponent,
      },
      {
        path: 'chat',
        component: AppChatComponent,
      },
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
      {
        path: 'chips',
        component: AppChipsComponent,
      },
      {
        path: 'lists',
        component: AppListsComponent,
      },
      {
        path: 'menu',
        component: AppMenuComponent,
      },
      {
        path: 'tooltips',
        component: AppTooltipsComponent,
      },
    ],
  },
];
