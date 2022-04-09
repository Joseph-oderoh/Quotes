export class Quote {
    showVote: boolean
    constructor(id: number, yourName: string, quoteName: string, postedDate: Date, voteUp: number, voteDown: number,){
        this.id = id;
        this.name = yourName;
        this.quoteName = quoteName;
        this.postedDate = postedDate;
        this.voteUp= voteUp;
        this.voteDown = voteDown;
        this.showVote=false
    }
    id: number;
    name: string;
    quoteName: string;
    postedDate: Date;
    voteUp: number;
    voteDown: number;

}
