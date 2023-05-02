import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  count_eyes(): number {
    return 2;
  }

  count_legs(): number {
    return 4
  }
}
