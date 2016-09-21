import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
         appRoutingProviders }  from './app.routing';
import './rxjs-extensions'

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { ListingComponent } from './listing';
import { ProductComponent } from './product';
import { SingleRowComponent, TwoColumnComponent } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListingComponent,
    ProductComponent, SingleRowComponent, TwoColumnComponent,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
