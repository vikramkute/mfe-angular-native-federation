import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'mfe1',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.default ?? m),
  },
  {
    path: 'mfe2',
    loadChildren: () =>
      loadRemoteModule('mfe2', './routes').then((m) => m.default ?? m),
  },
  {
    path: 'mfe3',
    loadChildren: () =>
      loadRemoteModule('mfe3', './routes').then((m) => m.default ?? m),
  },
  {
    path: 'mfe4',
    loadChildren: () =>
      loadRemoteModule('mfe4', './routes').then((m) => m.default ?? m),
  },
  {
    path: 'mfe5',
    loadChildren: () =>
      loadRemoteModule('mfe5', './routes').then((m) => m.default ?? m),
  },
];
