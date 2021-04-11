import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root',
})
export class CarImageService {
  apiUrl: string = 'https://localhost:44362/api/carimages';
  constructor(private httpClient: HttpClient) {}

  // getFileById(id: number): Observable<string> {
  //   return this.httpClient.get<string>(
  //     this.apiUrl + '/getfilebyid?id=' + id
  //   );
  // }
  getCarImages():Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getImagesByCarId(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + '/getcarimages?carId=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  // getCarImageUrl(id: number): string {
  //   return this.apiUrl + '/getfilebyid?id=' + id;
  // }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carimages/getimagesbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  uploadImage(image: File,carId:number):Observable<any> {

    console.log(image.name)
    console.log(carId)
    const formData:FormData = new FormData();

    formData.append('Image', image);
    formData.append('CarId',carId.toString());

    let newPath=this.apiUrl+'carImages/add';
    return this.httpClient.post<ResponseModel>(newPath,formData,{
      reportProgress: true,
      responseType: 'json',
    });
}} 