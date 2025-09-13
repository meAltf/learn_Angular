import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  // string, number, boolean, date

  courseName: string = "AI & ML Eng";
  isActive: boolean = true;
  rollNum: number = 999;
  currDate: Date = new Date();

  constructor() {
    console.log(this.courseName);

    console.log("AI & ML Eng with Agentic AI");
    console.log(this.courseName);
  }

}
