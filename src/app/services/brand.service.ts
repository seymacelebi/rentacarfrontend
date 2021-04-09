import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListRespponseModel } from '../models/listResponseModel';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44362/api/brands/getall';

  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<ListRespponseModel<Brand>> {
    return this.httpClient
     .get<ListRespponseModel<Brand>>(this.apiUrl)
     };
}
