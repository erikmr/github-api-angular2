import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FormControl , Validators} from '@angular/forms';
import { GithubComponent } from './components/github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    GithubComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
