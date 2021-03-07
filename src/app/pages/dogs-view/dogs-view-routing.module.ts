import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsViewPage } from './dogs-view.page';

const routes: Routes = [
  {
    path: '',
    component: DogsViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogsViewPageRoutingModule {}
