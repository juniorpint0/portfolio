import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { SkillsComponent } from './page/skills/skills.component';
import { NavComponent } from './template/nav/nav.component';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from '@angular/material/sidenav';


// import {MatSidenavModule} from 'angular/material/sidenav';
// import {MatListModule} from 'angular/material/list'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    NavComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
