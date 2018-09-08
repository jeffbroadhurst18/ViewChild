import { Component, ViewChild } from '@angular/core';
import { CpColorDirective } from '../cpcolor.directive';

@Component({
    selector: 'app-cpcolor-parent',
    templateUrl: './cpcolor-parent.component.html'
})
export class CpColorParentComponent {
    @ViewChild(CpColorDirective)
    private cpColorDirective: CpColorDirective;
    private original: String = "broadhurst";
    private changed:String;
    public finalAnswer:String = null;
    changeColor(color: string) {
        this.cpColorDirective.change(color);
        var strArray = this.original.split("");
        var leng = strArray.length;
        var newArray = new Array<String>();
        var answer = "";
        for (var x=leng-1;x>-1;x--)
            {
                newArray.push(strArray[x]);
            }
        for (var y=0;y < leng; y++)
            {
                answer += newArray[y];
            }
        this.finalAnswer = answer;    
    }
} 