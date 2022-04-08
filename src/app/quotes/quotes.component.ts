import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote [] = [
    new Quote (1,'Charles','The human spirit must prevail over technology to allow humans be in charge', 0 , 0),
    new Quote(2,"Joz","Open your mind to the world", 0, 0 ),
    new Quote(2,"Jaz","It's never to late to do better you just havre to do it", 0, 0 ),
    new Quote(3,"Blaco","Take me back to the time we met", 0, 0 ),
    new Quote(4,"Joseph","Be you, do you,for you", 0, 0 )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
