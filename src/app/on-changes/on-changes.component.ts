import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnInit, OnChanges {

  @Input() hero: string;
  @Input() power: string;

  changeLog: string[];
  constructor() { }

  ngOnInit() {
    this.changeLog = new Array<string>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName]; //changes is an array of properties
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      if (this.changeLog !== null) {
        this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
  }

}
