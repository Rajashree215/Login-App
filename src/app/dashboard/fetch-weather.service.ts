import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchWeatherService {
  lat: number = 13.0836939;
  lon: number = 80.270186;
  reverse!: any;
  weatherData!: any;
  name: string = '';
  apikey: string = 'ccde0925f653acf2dead8f26655b8dca';

  constructor() {}

  async getLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            this.lat = position.coords.latitude;
            this.lon = position.coords.longitude;
            resolve([this.lat, this.lon]);
          },
          () => {
            reject([this.lat, this.lon]);
          }
        );
      } else {
        reject([this.lat, this.lon]);
      }
    });
  }

  async getWeatherDetails(lat: number, lon: number): Promise<any> {
    try {
      this.reverse = await fetch(
        `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${this.apikey}`
      ).then((res) => res.json());
      this.name = this.reverse[0].name;

      this.weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apikey}&units=metric`
      ).then((res) => res.json());
      return [this.name,this.weatherData]
      
    } catch (error) {
      console.log('Error fetching details');
    }
  }
}
