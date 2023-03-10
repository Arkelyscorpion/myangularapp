import { Component, Input } from '@angular/core';
import { RoomData } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  @Input()rooms:RoomData[] = []
}
