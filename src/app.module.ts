import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalShelterModule } from './animals/animalshelter.module';

@Module({
  imports: [AnimalShelterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
