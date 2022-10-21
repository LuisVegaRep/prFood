import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = '';
  pass = '';

  form = true;
  level = 0;

  check() {
    if (this.user == 'a' && this.pass == 'a') {
      this.level = 1;
      this.form = false;
    }
    if (this.user == 's' && this.pass == 's') {
      this.level = 2;
      this.form = false;
    }
  }

  onKey(event: any, value: number) {
    if (value == 1) this.user = event.target.value;
    if (value == 2) this.pass = event.target.value;
  }
}
