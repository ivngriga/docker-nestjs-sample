import { Injectable } from '@nestjs/common';
import { DogService } from './animals/dog/dog.service';

@Injectable()
export class AppService {
  constructor(
    private readonly dogService: DogService,
  ) {}

  getHello(): string {
    
    return 'Hello World!';
  }
}
