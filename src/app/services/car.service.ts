import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListRespponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44362/api/cars/getall';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListRespponseModel<Car>> {
    let newPath=this.apiUrl+ "cars/getall"
   return this.httpClient
    .get<ListRespponseModel<Car>>(newPath)
    };
    getCarsByBrand(brandId:number):Observable<ListRespponseModel<Car>> {
      let newPath=this.apiUrl+ "cars/getbybrand?brandId="+brandId
      return this.httpClient
       .get<ListRespponseModel<Car>>(newPath)
       };
}


