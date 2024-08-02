import { Routes } from '@angular/router';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { AppChatComponent } from './ui-components/chat/chat.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: AppDashboardComponent,
    data: {
      title: 'Starter Page',
    },
  },
  {
    path: 'chat',
    component: AppChatComponent
    ,
    data: {
      title: 'Starter Page',
    },
  },
];
