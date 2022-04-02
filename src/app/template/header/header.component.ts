import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() public toggleSidenav = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  // toggle(): void {
  //   this.toggleSidenav.emit();
  // }
}
