export class Quote {
    showVote: boolean
    constructor(id: number, Yourname: string, Quote: string, postedDate: Date, voteUp: number, voteDown: number,){
        this.id = id;
        this. Yourname = Yourname;
        this.Quote = Quote;
        this.postedDate = postedDate;
        this.voteUp= voteUp;
        this.voteDown = voteDown;
        this.showVote=false
    }
    id: number;
    Yourname: string;
    Quote: string;
    postedDate: Date;
    voteUp: number;
    voteDown: number;

}
