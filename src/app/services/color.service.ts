import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl:string="https://localhost:44362/api/";
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getall";
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColorById(id:number):Observable<SingleResponseModel<Color>>{
    let newPath = this.apiUrl+"colors/getbyid?id=" + id;
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }
}