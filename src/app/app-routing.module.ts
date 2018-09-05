import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';
import { CpColorParentComponent } from './cpcolor-parent/cpcolor-parent.component';

const routes: Routes = [
  { path: 'number-parent', component: NumberParentComponent },
  { path: 'stopwatch-parent', component: StopwatchParentComponent },
  { path: 'cpcolor-parent', component: CpColorParentComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
}) // makes available elsewhere



export class AppRoutingModule { 

  
}

