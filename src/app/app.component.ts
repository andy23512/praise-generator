import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  praise = '';
  generatePraise(event: KeyboardEvent) {
    const str = (<HTMLInputElement>event.target).value;
    this.praise = str
      ? `༼ つ ◕_◕ ༽つ PRAISE ${str.toUpperCase()} ༼ つ ◕_◕ ༽つ`
      : '';
  }
  copyPraise() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.praise;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
