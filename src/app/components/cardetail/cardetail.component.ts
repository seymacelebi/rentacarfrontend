import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';

import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';

import { BrandService } from 'src/app/services/brand.service';

import { CarService } from 'src/app/services/car.service';
import { CarImageService } from 'src/app/services/carimage.service';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  cars:Car[] = [];
  carDetails:CarDetail[]=[];
  brand!:Brand;
  color!: Color;
  carImages!: CarImage[];
  car!: Car;
  
  constructor(private carService:CarService,
    private activatedRoute : ActivatedRoute,
    private brandService:BrandService,
    private colorService:ColorService,
    private carImageService:CarImageService,
    ) { }

    ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
        this.getCarById(params['carId']);
      });
    }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data;
    })
  }

  getAllCars(){
    this.carService.getAllCars().subscribe(response=>{
      this.cars=response.data;
    })
  }
  getCarDetails(id:number){
    this.carService.getCarDetails(id).subscribe(response=>{
      this.carDetails=response.data;
      console.log(this.carDetails)
    })
  }

  getBrandById(id: number) {
    this.brandService.getBrandById(id).subscribe((response) => {
      this.brand = response.data;
    });
  }

  getColorById(id: number) {
    this.colorService.getColorById(id).subscribe((response) => {
      this.color = response.data;
    });
  }

  getCarImagesById(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getCarById(carId: number) {
    this.carService.getCarById(carId).subscribe((response) => {
      this.car = response.data;

      this.getBrandById(this.car.brandId);
      this.getColorById(this.car.colorId);
      this.getCarImagesById(this.car.id);
    });
  }
  getCarImageUrl(carImageId: number): string {
    return this.carImageService.getCarImageUrl(carImageId);
  }

  isActiveCarousel(carImageIndex: number): string {
    return carImageIndex == 0 ? 'active' : '';
  }
}