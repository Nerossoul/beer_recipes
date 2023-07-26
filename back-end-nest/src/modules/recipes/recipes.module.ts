import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { PunkApiModule } from '../third-party-api/punk-api/punk-api.module';

@Module({
  imports: [PunkApiModule],
  providers: [RecipesService],
  controllers: [RecipesController],
})
export class RecipesModule {}
