import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-dogs-view',
  templateUrl: './dogs-view.page.html',
  styleUrls: ['./dogs-view.page.scss'],
})
export class DogsViewPage implements OnInit {

  dogView: any=[]; 

  constructor(private modalController: ModalController,
              private navParams: NavParams) 
  
  { 

    this.dogView = this.navParams.get('imageDog');

  }

  ngOnInit() {
  }


  close() {
    this.modalController.dismiss();
  }

}
