// src/app.component.ts
import { Component, OnInit } from '@angular/core';

declare var Elm;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-elm-custom-element';
  messages: string[] = [];

  private elmComponent: any;

  ngOnInit() {
    this.initElm();
    this.listenForEvents();
  }

  send(inputElem: HTMLInputElement) {
    this.elmComponent.ports.messageReceiver.send(inputElem.value);
    inputElem.value = '';
  }

  private initElm() {
    this.elmComponent = Elm.Main.init({
      node: document.getElementById('elm-component')
    });
  }

  private listenForEvents() {
    this.elmComponent.ports.sendMessage.subscribe(message => {
      this.messages.push(message);
    });
  }
}
