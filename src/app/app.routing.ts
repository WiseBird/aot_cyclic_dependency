import {ModuleWithProviders} from '@angular/core';
import {Routes, ExtraOptions, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [{
    path: '',
    component: HomeComponent,
}, {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule',
}, {
    path: 'lazy2',
    loadChildren: './lazy2/lazy.module#LazyModule',
}];

export const appRoutingOpts: ExtraOptions = {
    useHash: false,
    enableTracing: false,
};

export const routing: ModuleWithProviders = RouterModule.forRoot(
    appRoutes,
    appRoutingOpts,
);