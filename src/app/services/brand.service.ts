import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44362/api/brands/getall';

  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>> {
    return this.httpClient
     .get<ListResponseModel<Brand>>(this.apiUrl)
     };
     
     getBrandById(id:number):Observable<SingleResponseModel<Brand>>{
      let newPath = this.apiUrl+"brands/getbyid?id=" + id;
      return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
    }
}
