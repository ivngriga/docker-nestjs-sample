import { Injectable } from '@nestjs/common';
import { DogService } from './dog/dog.service';
import { CatService } from './cats/cat.service';

@Injectable()
export class AnimalShelterService {
  constructor(
    private readonly dogService: DogService,
    private readonly catService: CatService
  ) {}

  animal_count(): number {
    return this.dogService.count_dogs() + this.catService.count_cats()
  }

  animal_price(type: string, number: number): number {
    switch(type){
      case "cat":
        return number * this.catService.get_cat_price()

      case "dog":
        return number * this.dogService.get_dog_price()
    }
  }

  net_worth(): number {
    return (this.dogService.count_dogs() * this.dogService.get_dog_price()) + (this.catService.count_cats() * this.catService.get_cat_price())
  }
}
