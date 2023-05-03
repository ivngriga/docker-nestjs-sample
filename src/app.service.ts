import { Injectable, HttpCode } from '@nestjs/common';
import { AnimalShelterService } from './animals/animalshelter.service';
import { SubmitOfferDto } from './dto/submit_offer.dto';

import { validate } from 'class-validator';
import { CountAnimalsDto } from './dto/count_animals.dto';
import { count } from 'console';

@Injectable()
export class AppService {
  
  constructor(
    private readonly animalShelterService: AnimalShelterService,
  ) {}

  async submit_offer(submitOfferDto: SubmitOfferDto): Promise<string> {
    const newDto = new SubmitOfferDto(submitOfferDto.username, submitOfferDto.bid);
    
    const errors = await validate(newDto)
    if (errors.length > 0) console.log('validation failed. errors: ', errors);
    else console.log('validation succeed');

    const accept_bid = this.animalShelterService.net_worth() <= submitOfferDto.bid
    if(accept_bid) return `We accept your offer ${submitOfferDto.username}.`
    else return "Get out of here with that silly offer!"
  }

  async count_animals(countAnimalsDto: CountAnimalsDto){
    const newDto = new CountAnimalsDto(countAnimalsDto.username, countAnimalsDto.animal_type)

    const errors = await validate(newDto)
    if (errors.length > 0) console.log('validation failed. errors: ', errors);
    else console.log('validation succeed')

    let animal_count: number
    let animal_price: number

    animal_count = this.animalShelterService.animal_count(countAnimalsDto.animal_type)
    animal_price  = this.animalShelterService.animal_price(countAnimalsDto.animal_type)

    return `We have ${animal_count} ${countAnimalsDto.animal_type}(s). Each costs ${animal_price} dollar(s).`
    

  }
}
