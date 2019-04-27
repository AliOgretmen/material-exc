import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  showSpinner= false;

  constructor() { }

  ngOnInit() {
  }

  loadSpinner(){
   this.showSpinner = true;
   setTimeout(()=>{
    this.showSpinner = false;
   }, 5000);
  }

}
