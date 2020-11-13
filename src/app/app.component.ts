import { AfterViewInit, Component, OnInit } from '@angular/core';

declare const Elm;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-elm-custom-element';
  message: string;

  private elmComponent: any;

  ngOnInit() {
    this.elmComponent = Elm.Main.init({
      node: document.getElementById('elm-component')
    });

    this.elmComponent.ports.sendMessage.subscribe(message => {
      this.message = message;
    });
  }

  send(message: string) {
    this.elmComponent.ports.messageReceiver.send(message);
  }
}
