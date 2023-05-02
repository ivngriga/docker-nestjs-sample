import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  count_cats(){
    return 32
  }

  get_cat_price(){
    return 3
  }
}
