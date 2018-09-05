import { Component, ViewChild, OnInit } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html'
})
export class NumberParentComponent implements OnInit {
  @ViewChild(NumberComponent)
  private numberComponent: NumberComponent;
  private numberOptions: string[];
  private radioSelected: string;


  ngOnInit() {
    this.numberOptions = ["One", "Two"];
    this.radioSelected = "One";
  }

  increase() {
      this.numberComponent.increaseByOne();
  }
  decrease() {
      this.numberComponent.decreaseByOne();
  }
} 