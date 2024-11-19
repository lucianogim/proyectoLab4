import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ListarUsuariosComponent } from './components/admin/component/listar-usuarios/listar-usuarios.component';
import { LoginPagesComponent } from './components/auth/pages/login-pages/login-pages.component';
import { Component } from '@angular/core';
import { PagesAdminAddUsuarioComponent } from './components/admin/pages/pages-admin-add-usuario/pages-admin-add-usuario.component';
import { PagesAdminComponent } from './components/admin/pages/pages-admin/pages-admin.component';
import { PagesAdminUpdateUsuarioComponent } from './components/admin/pages/pages-admin-update-usuario/pages-admin-update-usuario.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'admin',
        component: PagesAdminComponent 
    },
    {
        path: 'login',
        component: LoginPagesComponent
    },
    {
        path: 'addUsuario',
        component: PagesAdminAddUsuarioComponent
    },
    {
        path: 'updateUsuario/:id',
        component: PagesAdminUpdateUsuarioComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
    
];
