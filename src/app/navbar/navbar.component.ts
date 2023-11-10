import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  navbarChildMessage: string = 'Navbar sending data to the app component';
  childmessage: string =
    'This Sending data form child to parent by using Output decorator & Event Emmiter';
  OutputMessage: string = 'This is a example';

  Name: string = 'Atachi Software System';

  @Input() navPostData!: string;
  @Output() MessageEvent = new EventEmitter<string>();
  @Output() MessageEvent1 = new EventEmitter<string>();

  onClick() {
    this.MessageEvent.emit(this.childmessage);
  }
  onButtonClick() {
    this.MessageEvent1.emit(this.OutputMessage);
  }
}
