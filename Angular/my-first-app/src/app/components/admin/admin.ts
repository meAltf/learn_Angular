import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit, AfterViewInit, OnDestroy{

  constructor(){
    console.log('constructor executed!')
    // properties initialization
  }

  ngOnInit(): void {
    console.log('ngOnInit life cycle.')
      // api calls
      // subscription
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit life cycle')
  }

  ngOnDestroy(): void {
    console.log('onDestroy life cycle')
  }


}
