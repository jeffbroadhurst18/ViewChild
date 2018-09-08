import { Component, OnInit } from '@angular/core';
import {} from '../on-changes/on-changes.component';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css']
})
export class OnChangesParentComponent implements OnInit {

  constructor() { }

  power:string;
  hero:string;

  ngOnInit() {
    this.power = "";
    this.hero = "";
  }

}
