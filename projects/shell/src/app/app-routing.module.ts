import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => {
        return m.HomeModule;
      }),
  },
  {
    path: 'product',
    // loadChildren: () =>
    //   import('product/Module').then((m) => {
    //     return m.ProductModule;
    //   }),
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4004/productEntry.js',
        // remoteName: 'product',
        type: 'module',
        exposedModule: './Module',
      }).then((module) => module.ProductModule),
  },
  {
    path: 'customer',
    // loadChildren: () =>
    //   import('customer/Module').then((m) => {
    //     return m.CustomerModule;
    //   }),
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:5005/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((module) => module.CustomerModule),
  },
  {
    path: 'order',
    // loadChildren: () =>
    //   import('order/Module').then((m) => {
    //     return m.OrderModule;
    //   }),
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:6006/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((module) => module.OrderModule),
  },
  {
    path: 'tracking',
    // loadChildren: () =>
    //   import('tracking/Module').then((m) => {
    //     return m.TrackingModule;
    //   }),
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:7007/remoteEntry.js',
        type: 'module',
        exposedModule: './Module',
      }).then((module) => module.TrackingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
