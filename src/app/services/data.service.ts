import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( public http: HttpClient) { }


  getDogs(){

    return this.http.get('https://dog.ceo/api/breeds/image/random/50');

  }

  getBreeds() {

    return this.http.get('https://dog.ceo/api/breeds/list');

  }

  getBreedImages(breed) {

    return this.http.get('https://dog.ceo/api/breed/'+breed+'/images/random/20');

  }



}
