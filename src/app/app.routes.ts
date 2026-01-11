// app.routes.ts
import { Routes } from '@angular/router';
import { List } from './list/list';
import { Boxstable } from './boxstable/boxstable';
import { Welcomepage } from './welcomepage/welcomepage';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'addhero', component: Boxstable },
    { path: 'list', component: List },
    { path: 'home', component: Welcomepage },
    { path: '**', redirectTo: 'home' }
];
