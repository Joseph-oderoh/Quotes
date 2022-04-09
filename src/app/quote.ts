export class Quote {
    showVote: boolean
    constructor(id: number, yourName: string, quoteName: string, postedDate: Date, voteUp: number, voteDown: number,){
        this.id = id;
        this. Yourname = yourName;
        this.quoteName = quoteName;
        this.postedDate = postedDate;
        this.voteUp= voteUp;
        this.voteDown = voteDown;
        this.showVote=false
    }
    id: number;
    Yourname: string;
    quoteName: string;
    postedDate: Date;
    voteUp: number;
    voteDown: number;

}
