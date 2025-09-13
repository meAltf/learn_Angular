import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,   
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

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

}
