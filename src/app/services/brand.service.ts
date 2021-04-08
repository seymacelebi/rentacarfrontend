import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarResponseModel } from '../models/carResponseModel';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44362/api/brands/getall';

  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<BrandResponseModel> {
    return this.httpClient
     .get<BrandResponseModel>(this.apiUrl)
     };
}
