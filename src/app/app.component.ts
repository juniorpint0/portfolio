import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SidenavComponent } from './template/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild(SidenavComponent) sideComponent!: SidenavComponent;

  
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    
  }
  title = 'portfolio';
  toggleSidenav(): void {
    this.sideComponent.sidenav.toggle();
  }
}
