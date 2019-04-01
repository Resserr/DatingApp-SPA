import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output()
  cancelFlag = new EventEmitter<boolean>();
  constructor(private serviceAuth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.serviceAuth.register(this.model).subscribe(() => console.log('Successfully registered.'),
    error => console.log(error));
  }
  cancel() {
    this.cancelFlag.emit(false);
  }
}
