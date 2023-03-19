import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(){
    
  }

  showMenu: boolean = false;

  onToggleMenu(){
    this.showMenu = !this.showMenu;
    console.log(this.showMenu)
  }

}
