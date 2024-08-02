import { Routes } from '@angular/router';

// ui

import { AppChatComponent } from './chat/chat.component';
import { AppBadgeComponent } from './badge/badge.component';

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: AppBadgeComponent,
      },
     
      {
        path: 'chat',
        component: AppChatComponent,
      },
    ],
  },
];
