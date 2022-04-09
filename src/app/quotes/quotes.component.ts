import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote [] = [
    new Quote (1,'Noelina','The human spirit must prevail over technology to allow humans be in charge', new Date(2022,6,14), 0 , 0),
    new Quote(2,"Kenedy","Open your mind to the world experience the joy of knowlaged",new Date(2021,1,22), 0, 0 ),
    new Quote(3,"Oderoh","It's never to late to do better you just havre to do it",new Date(2022,3,4), 0, 0 ),
    new Quote(4,"Blaco","We are all born beautiful the worst mistake is to told  you are not ",new Date(2022,1,21), 0, 0 ),
    new Quote(5,"Joseph","Be you, do you,for you make yourself a priority",new Date(2022,1,2), 0, 0 )
  ]
  toggleDetails(index: number){
    this.quotes[index].showVote = !this.quotes[index].showVote;
  }
  deleteQuote(isComplete:any, index: number){
    if (isComplete){
      let toDelete = confirm(`Do you want to delete this  qoute by ${this.quotes[index].Yourname}?`)
      this.quotes.splice(index,1);
    }
  }



  voteUp(i:  number) {
    this.quotes[i].voteUp ++;
  }
  voteDown(i:  number) {
    this.quotes[i].voteDown ++;
  }

  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  // preNum!:number
  // lastNum!:number
  // counter!:number

  // highestUpvote(){
  //   this.preNum = 0
  //   this.lastNum = 0

  //   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
  //     this.lastNum = this.quotes[this.counter].voteUp;
  //     if(this.lastNum > this.preNum){this.preNum = this.lastNum}
  //   }
  //   return  this.preNum
  // }


   arry: number[] = this.quotes.map(quote =>quote.voteUp)
highest = Math.max(...this.arry)
  constructor() { }

  ngOnInit(): void {
  }

}
