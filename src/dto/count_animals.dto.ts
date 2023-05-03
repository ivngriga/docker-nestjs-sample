import { IsString, IsNotEmpty } from 'class-validator';


export class CountAnimalsDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    animal_type: string;

    constructor(username: string, animal_type:string){
        this.username=username
        this.animal_type=animal_type
    }
}