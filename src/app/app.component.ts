import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { AuthService } from '@auth0/auth0-angular';


interface Plant {
  Idealrh: number;
  Idealph: number;
  IdealTemp: number;
  DaysInVeg: number;
  CropName: string;
  DaysInFruit: number;
  DaysInSeedling: number;
}

interface Response {
  plants: Plant[];
}

const GET_PLANTS = gql `
query FetchPlants {
  PlantTypes {
    DaysInSeedling
    DaysInSeedling
    Idealrh
    Idealph
    IdealTemp
    DaysInVeg
    DaysInFruit
    CropName
  }
}
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'FarmingTool';

  plants$!: Observable<Plant[]> ;
  
  constructor(private apollo: Apollo, public auth:AuthService){}

  ngOnInit(): void{
    this.plants$ = this.apollo
    .watchQuery<Response>({
      query: GET_PLANTS,
    }).valueChanges.pipe(map((result) => result.data.plants))
  }

}
