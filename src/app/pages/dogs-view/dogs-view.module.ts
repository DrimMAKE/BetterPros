import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DogsViewPageRoutingModule } from './dogs-view-routing.module';

import { DogsViewPage } from './dogs-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DogsViewPageRoutingModule
  ],
  declarations: [DogsViewPage]
})
export class DogsViewPageModule {}
