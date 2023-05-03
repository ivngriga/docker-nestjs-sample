import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SubmitOfferDto } from './dto/submit_offer.dto';
import { CountAnimalsDto } from './dto/count_animals.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('submit-offer')
  async submit_offer(@Body() submitOfferDto: SubmitOfferDto ) { 
    return await this.appService.submit_offer(submitOfferDto) 
  }

  @Get('count-animals')
  async count_animals(@Query() countAnimalsDto: CountAnimalsDto) {
    return await this.appService.count_animals(countAnimalsDto)
  }
}
