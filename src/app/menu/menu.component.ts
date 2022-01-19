import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items!: MenuItem[];
  activeItem!: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      { label: 'About', routerLink: 'about' },
      { label: 'Work', routerLink: 'work' },
      { label: 'Contact', routerLink: 'contact' },
    ];
    this.activeItem = this.items[0];
  }
}
