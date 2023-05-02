import { IsString, IsNotEmpty, IsNumber } from 'class-validator';


export class SubmitOfferDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsNumber()
    @IsNotEmpty()
    bid: number;

    constructor(username?: string, bid?:number){
        this.username=username
        this.bid=bid
    }
}