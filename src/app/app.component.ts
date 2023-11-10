import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'App Component';
  navbarData: string = 'App component sending data to navabr component';

  message!: string;
  message1!: string;
  Name1!: string;
  Data!: string;

  @ViewChild(NavbarComponent) childComp: any;
  @ViewChild(NavbarComponent) childMessageNew: any;

  constructor() {
    console.log('Data', this.childComp);
    console.log(this.childMessageNew);
  }
  ngAfterViewInit(): void {
    console.log('Child Data', this.childComp);
    this.message = this.childComp.navbarChildMessage;
    this.Name1 = this.childMessageNew.Name;
  }

  recivedmessage($event: any) {
    console.log($event);
    this.message1 = $event;
  }
  newMessage($event: any) {
    console.log($event);
    this.message1 = $event;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
