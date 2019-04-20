import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output()
  cancelFlag = new EventEmitter<boolean>();
  constructor(private serviceAuth: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.serviceAuth.register(this.model).subscribe(() => this.alertifyService.success('Successfully registered.'),
    error => this.alertifyService.error(error));
  }
  cancel() {
    this.cancelFlag.emit(false);
  }
}
