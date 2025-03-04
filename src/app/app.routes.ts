import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { ErrorComponent } from './pages/error/error.component';

export const routes: Routes = [

    {
        path:'', component: HomeComponent
    },
    {
        path:'product', component: ProductComponent
    },
    {
        path:'**', component: ErrorComponent
    },
    
];
