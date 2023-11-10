import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [BrowserModule, RouteRoutingModule],
  declarations: [AppComponent, NavbarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

  recivedmessage(){
    
  }
}
