import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { SubmitOfferDto } from './dto/submit_offer.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async submit_offer(@Body() submitOfferDto: SubmitOfferDto ) { 
    return await this.appService.submit_offer(submitOfferDto) 
  }
}
