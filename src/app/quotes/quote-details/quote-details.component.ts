import { Component, Input, OnInit , Output, EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
   quote!: Quote
   
   voteUP = 0;
   voteDown = 0;
   
   @Output() isComplete = new EventEmitter< boolean>();
   quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }



  // voteUp(){
  //   this.quote!.voteUp+=1;
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
