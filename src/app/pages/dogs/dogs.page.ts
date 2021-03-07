import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ModalController} from '@ionic/angular';
import { Router } from '@angular/router';

import { DogsViewPage } from '../dogs-view/dogs-view.page';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.page.html',
  styleUrls: ['./dogs.page.scss'],
})
export class DogsPage implements OnInit {

  breeds: any[] = [];
  breed: any;
  inPages: string = 'page1';
  imagesDogs: any[];
  imagesFavorites: any[];
  status: any;

  taskName: any = '';
  taskDate: any = '';
  taskList = [];

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(private dataService: DataService,
              private modalController: ModalController,
              public formBuilder: FormBuilder,
              private router: Router) 
              
  {}

  ngOnInit() {

    this.dataService.getDogs().subscribe( (dogs: any[]) => {
      this.imagesDogs = dogs['message'];
      this.status = dogs['status'];
      //console.log(this.imagesDogs, this.status)
    })
    
    this.dataService.getBreeds().subscribe( (breeds: any[]) => {
      this.breeds = breeds['message'];
      //console.log(this.breeds)
    })

  }

  findImages(breed){

    if (breed == 'all') {

      this.imagesFavorites = null;

      this.dataService.getDogs().subscribe( (dogs: any[]) => {
        this.imagesDogs = dogs['message'];
        this.status = dogs['status'];
        //console.log(this.imagesDogs, this.status)
      })
      
    } else {
      
      this.imagesDogs = null;

      this.dataService.getBreedImages(breed).subscribe( (dogs: any[]) => {
        this.imagesFavorites = dogs['message'];
        this.status = dogs['status'];
        //console.log(this.imagesDogs, this.status)
      })

    }
  }

  openDogView(imageURL) {
   this.modalController.create({
     component: DogsViewPage,
     
     componentProps: {
       imageDog: imageURL
     }
   }).then(modal => {
     modal.present();
   });
  }

  addTask() {

    if (this.taskName.length > 0 && this.taskDate != '') {

      let task = this.taskName;

      this.taskList.push(this.taskName)

      this.taskName = '';
      this.taskList.sort().reverse()
      //console.log(this.taskList)

    }

  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  newPage(taskList) {

    this.router.navigate(['/todo'],{ queryParams: {data: taskList}});

  }

}




