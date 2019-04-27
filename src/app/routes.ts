import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'lists', component: ListsComponent},
            { path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
            { path: 'messages', component: MessagesComponent}
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];
