import { Module } from '@nestjs/common';
import { AnimalShelterService } from './animalshelter.service';
import { DogModule } from './dog/dog.module';
import { CatModule } from './cats/cat.module';

@Module({
  imports: [DogModule, CatModule],
  providers: [AnimalShelterService],
  exports: [AnimalShelterService]
})
export class AnimalShelterModule {}
