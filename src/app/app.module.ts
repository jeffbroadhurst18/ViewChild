import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberParentComponent } from './number-parent/number-parent.component';
import { AppRoutingModule } from './/app-routing.module';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { StopwatchParentComponent } from './stopwatch-parent/stopwatch-parent.component';
import { CpColorParentComponent } from './cpcolor-parent/cpcolor-parent.component';
import { CpColorDirective } from './cpcolor.directive';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { DoCheckParentComponent } from './do-check-parent/do-check-parent.component';
import { DoCheckComponent } from './do-check/do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberParentComponent,
    StopwatchComponent,
    StopwatchParentComponent,
    CpColorParentComponent,
    CpColorDirective,
    OnChangesComponent,
    OnChangesParentComponent,
    DoCheckParentComponent,
    DoCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
