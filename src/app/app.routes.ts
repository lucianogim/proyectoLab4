import { Routes } from '@angular/router';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginPagesComponent } from './components/auth/pages/login-pages/login-pages.component';
import { Component } from '@angular/core';
import { PagesAdminAddUsuarioComponent } from './components/admin/pages/pages-admin-add-usuario/pages-admin-add-usuario.component';
import { PagesAdminComponent } from './components/admin/pages/pages-admin/pages-admin.component';
import { PagesAdminUpdateUsuarioComponent } from './components/admin/pages/pages-admin-update-usuario/pages-admin-update-usuario.component';
import { authGuardFn } from './components/auth/guard/auth.guard-fn';
import { authGuardFnAdmin } from './components/auth/guard/auth.guard-fn-admin';
import { authGuardFnLogout } from './components/auth/guard/auth.guard-fn-logout';
import { PageListarPokemonsComponent } from './components/admin/pages/page-listar-pokemons/page-listar-pokemons.component';
import { PagesUpdatePokemonComponent } from './components/admin/pages/pages-update-pokemon/pages-update-pokemon.component';
import { PageAddPokemonComponent } from './components/admin/pages/page-add-pokemon/page-add-pokemon.component';
import { PageListMovesComponent } from './components/admin/pages/page-list-moves/page-list-moves.component';
import { PageUpdateMovesComponent } from './components/admin/pages/page-update-moves/page-update-moves.component';
import { PageAddMovesComponent } from './components/admin/pages/page-add-moves/page-add-moves.component';
import { PageProfileComponent } from './components/user/pages/page-profile/page-profile.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'admin',
        component: PagesAdminComponent,
        canActivate: [authGuardFnAdmin]
    },
    {
        path: 'login',
        component: LoginPagesComponent,
        canActivate: [authGuardFnLogout]
    },
    {
        path: 'addUsuario',
        component: PagesAdminAddUsuarioComponent,
        canActivate: [authGuardFnAdmin]
    },
    {
        path: 'updateUsuario/:id',
        component: PagesAdminUpdateUsuarioComponent,
        canActivate: [authGuardFnAdmin]
    },
    {   
        path: 'listPokemons',
        component: PageListarPokemonsComponent
    },
    {
        path: 'updatePokemons/:id',
        component: PagesUpdatePokemonComponent
    },
    {
        path: 'addPokemon',
        component: PageAddPokemonComponent 
    },
    {
        path: 'listMoves',
        component: PageListMovesComponent
    },
    {   
        path:   'updateMoves/:id',
        component: PageUpdateMovesComponent
    },
    {
        path:   'addMoves',
        component: PageAddMovesComponent
    },
    {
        path: 'userProfile',
        component: PageProfileComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
    
];
