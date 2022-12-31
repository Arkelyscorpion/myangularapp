import { Component } from '@angular/core';
import { RoomData } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  hotelName = 'Krishna Bhavan';
  hideRooms = false;

  rooms: RoomData[] = [
    {
      roomNumber: 1,
      price: 100,
      photos: 'none',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
    },
    {
      roomNumber: 2,
      price: 140,
      photos: 'none',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
    },
    {
      roomNumber: 3,
      price: 200,
      photos: 'none',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('11-Nov-2021'),
    },
  ];

  numberOfRooms = 10;
  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
