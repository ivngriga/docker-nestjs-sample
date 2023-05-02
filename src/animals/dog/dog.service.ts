import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  count_eyes(): number {
    return 2;
  }

  count_legs(): number {
    return 4
  }
}
