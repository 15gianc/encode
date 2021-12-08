import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string = '';
  mensajes: any = [
    {
      emisor: 'bot',
      texto: 'Hola, ¿que tal?',
    },
  ];

  possibleAnswers = [
    'Hola! Soy Enco. Tu asistente en Encode, ¿En qué te puedo ayudar?',
    'Ahh, eso es sencillo. Para crear una lista, debes acceder al botón que se encuentra en la parte superior derecha. 😊',
  ];

  isClosed: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  enviarMensaje() {
    this.mensajes.push({
      emisor: 'id',
      texto: this.nuevoMensaje,
    });

    if (this.mensajes.length < 3) {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[0],
        });
      }, 450);
    } else {
      setTimeout(() => {
        this.mensajes.push({
          emisor: 'bot',
          texto: this.possibleAnswers[1],
        });
      }, 450);
    }

    this.nuevoMensaje = '';
  }
  open() {
    this.isClosed = false;
  }

  close() {
    this.isClosed = true;
  }
}