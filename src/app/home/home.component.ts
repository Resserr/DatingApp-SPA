import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerFlag: any = false;
  constructor() { }

  ngOnInit() {
  }

  changeRegisterFlag() {
    this.registerFlag = !this.registerFlag;
  }
  cancelRegisterFlag(registerFlagChild: boolean) {
    this.registerFlag = registerFlagChild;
  }

}
