import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { DeloresComponent } from './delores/delores.component';
import { MaeveComponent } from './maeve/maeve.component';
import { BernardComponent } from './bernard/bernard.component';
import { FordComponent } from './ford/ford.component';
import { DeloresPipePipe } from './delores-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeloresComponent,
    MaeveComponent,
    BernardComponent,
    FordComponent,
    DeloresPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
