export class Quote {
    constructor(id: number, yourName: string, quoteName: string, voteUp: number, voteDown: number,){
        this.id = id;
        this.name = yourName;
        this.quoteName = quoteName;
        this.voteUp= voteUp;
        this.voteDown = voteDown
    }
    id: number;
    name: string;
    quoteName: string;
    voteUp: number;
    voteDown: number;

}
