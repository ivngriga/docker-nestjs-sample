import { Injectable } from '@nestjs/common';
import { AnimalShelterService } from './animals/animalshelter.service';
import { SubmitOfferDto } from './dto/submit_offer.dto';

import { validate } from 'class-validator';

@Injectable()
export class AppService {
  
  constructor(
    private readonly animalShelterService: AnimalShelterService,
  ) {}

  async submit_offer(submitOfferDto: SubmitOfferDto): Promise<string> {
    const newDto = new SubmitOfferDto(submitOfferDto.username, submitOfferDto.bid);
    
    let errors = await validate(newDto)
    if (errors.length > 0) console.log('validation failed. errors: ', errors);
    else console.log('validation succeed');

    let accept_bid = this.animalShelterService.net_worth() <= submitOfferDto.bid
    if(accept_bid) return `We accept your offer ${submitOfferDto.username}.`
    else return "Get out of here with that silly offer!"
  }
}
