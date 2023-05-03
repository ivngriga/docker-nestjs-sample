import { BadRequestException, Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { DogService } from './dog/dog.service';
import { CatService } from './cats/cat.service';

@Injectable()
export class AnimalShelterService {
  constructor(
    private readonly dogService: DogService,
    private readonly catService: CatService
  ) {}

  animal_count(animal_type: string): number {
    switch(animal_type){
      case "cat":
        return this.catService.count_cats()

      case "dog":
        return this.dogService.count_dogs()
    }

    throw new HttpException("Invalid animal type. Animal type must be 'cat' or 'dog'", HttpStatus.BAD_REQUEST)
  }

  total_animal_count(): number {
    return this.dogService.count_dogs() + this.catService.count_cats()
  }

  animal_price(type: string): number {
    switch(type){
      case "cat":
        return this.catService.get_cat_price()

      case "dog":
        return this.dogService.get_dog_price()
    }

    throw new HttpException("Invalid animal type. Animal type must be 'cat' or 'dog'", HttpStatus.BAD_REQUEST)
  }

  net_worth(): number {
    return (this.dogService.count_dogs() * this.dogService.get_dog_price()) + (this.catService.count_cats() * this.catService.get_cat_price())
  }
}
