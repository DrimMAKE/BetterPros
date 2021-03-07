import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full'
  },
  {
    path: 'dogs',
    loadChildren: () => import('./pages/dogs/dogs.module').then( m => m.DogsPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then( m => m.TodoPageModule)
  },
  {
    path: 'dogs-view',
    loadChildren: () => import('./pages/dogs-view/dogs-view.module').then( m => m.DogsViewPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
