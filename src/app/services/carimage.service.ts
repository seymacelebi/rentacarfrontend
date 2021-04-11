import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl: string = 'https://localhost:44362/api/carimages';
  constructor(private httpClient: HttpClient) {}

  getFileById(id: number): Observable<string> {
    return this.httpClient.get<string>(
      this.apiUrl + '/getfilebyid?id=' + id
    );
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + '/getcarimages?carId=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImageUrl(id: number): string {
    return this.apiUrl + '/getfilebyid?id=' + id;
  }
}