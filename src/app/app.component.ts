import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputText: string = '';
  destroy: boolean = true;
  ngDestroy() {
    this.destroy = false;
  }
  onSubmit(inputEl: HTMLInputElement) {
    this.inputText = inputEl.value;
  }
}
