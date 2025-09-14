import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding implements OnInit {

  // string, number, boolean, date

  courseName: string = "AI & ML Eng";
  isActive: boolean = true;
  rollNum: number = 999;
  currDate: Date = new Date();

  minTextLength = 10;
  spanClassName = 'secondary'

  constructor() {
    console.log(this.courseName);

    this.courseName = "AI & ML Eng with Agentic AI";
    console.log(this.courseName);
  }

  ngOnInit(): void {
    console.log('DataBinding started..')
  }

  // function in Angular
  showAlert() {
    alert('Welcome to Angular 20 Alert!');
    console.log("check alert")
  }

  onCityChanged() {
    alert('Your city has been changed!');
  }

}
