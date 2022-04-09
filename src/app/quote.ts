export class Quote {
    showVote: boolean
    constructor(id: number, Yourname: string, Quote: string, postDate: Date, voteUp: number, voteDown: number,){
        this.id = id;
        this. Yourname = Yourname;
        this.Quote = Quote;
        this.postDate = postDate;
        this.voteUp= voteUp;
        this.voteDown = voteDown;
        this.showVote=false
    }
    id: number;
    Yourname: string;
    Quote: string;
    postDate: Date;
    voteUp: number;
    voteDown: number;

}
