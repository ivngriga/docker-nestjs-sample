import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  count_dogs(){
    return 17
  }

  get_dog_price(){
    return 4
  }
}
