import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FetchWeatherService } from './fetch-weather.service';
import { UserManagementService } from '../Services/user-management.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  coords!: number[];
  weatherData!: any;
  lat!: number;
  lon!: number;
  name: string = '';
  min!: number;
  max!: number;
  temp!: number;
  feels_like!: number;
  humidity!: number;
  icon!: string;
  description!: string;

  constructor(
    private WeatherService: FetchWeatherService,  
  ) {}

  ngOnInit(): void {
    this.getCoords();
  }

  async getCoords() {
    try {
      // get the current location
      this.coords = await this.WeatherService.getLocation();
    } catch (error: any) {
      // if not available, set a default location.
      this.coords = error;
    }
    this.lat = this.coords[0];
    this.lon = this.coords[1];
    console.log(this.coords, this.lat, this.lon);
    this.getWeather();
  }

  async getWeather() {
    try {
      this.weatherData = await this.WeatherService.getWeatherDetails(
        this.lat,
        this.lon
      );

      [this.name, this.weatherData] = this.weatherData;

      this.temp = Math.floor(this.weatherData.main.temp);
      this.min = Math.floor(this.weatherData.main.temp_min);
      this.max = Math.floor(this.weatherData.main.temp_max);
      this.feels_like = Math.floor(this.weatherData.main.feels_like);
      this.humidity = Math.floor(this.weatherData.main.humidity);

      this.icon = `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`;
      this.description = this.weatherData.weather[0].description;
    } catch (error) {
      console.log('error fetching data', error);
    }
  }
}
