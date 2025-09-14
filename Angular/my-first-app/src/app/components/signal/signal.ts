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

}
