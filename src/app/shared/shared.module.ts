import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    CardComponent
  ]
})
export class SharedModule { }
