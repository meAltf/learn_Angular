import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css'
})
export class Signal {

  courseName: string = "AI & ML Advance";

  angularVersion = signal("20");

  courseDuration = signal<string>('4 Years');

  changeDuration() {
    this.courseName = "Agentic AI";
    this.courseDuration.set("3 Years");
  }

  // exercise using update

  cityList = signal<string[]>(["Mumai", "Pune", "Nagpur"])

  addCity() {
    this.cityList.update((old: string[]) => [...old, "Chennai"]);
  }

  addCityFromPage(cityName: string) {
    this.cityList.update((existing: string[]) => [...existing, cityName])
  }

  // creating object
  studentObj = signal<any>({
    name: 'Robert',
    city: 'Patna'
  });

  changeCity() {
    this.studentObj.update((existingObj: any) => ({ ...existingObj, city: 'Gopalganj' }))

    this.studentObj.set({
      name: 'Robert',
      city: 'Muzzfarpur'
    })

  }

}
