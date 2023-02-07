import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-check',
  templateUrl: './username-check.component.html',
  styleUrls: ['./username-check.component.css']
})

export class UsernameCheckComponent implements OnInit {
  userName = '';

  getDisabled() {
    return this.userName ? false : true;
  }

  onUpdateInput(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onEmptyInput() {
    this.userName = '';
  }

  ngOnInit(): void {}
}