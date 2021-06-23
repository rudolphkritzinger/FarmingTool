import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  nutrients!: string;
  instructions!: string;
  RecommendedTemperature!: string;
  RecommendedHumidity!: string;
  RecommendedPh!: string;


  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    const message = `Settings Updated `;
  //grap all fields and values
  alert(message);
  }

}
