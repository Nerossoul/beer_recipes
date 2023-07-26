import { Get, Injectable, Param } from '@nestjs/common';
import { PunkApiService } from '../third-party-api/punk-api/punk-api.service';

@Injectable()
export class RecipesService {
  constructor(private readonly punkApiService: PunkApiService) {}

  public getRecipes(page) {
    return this.punkApiService.getBeers(page);
  }

  @Get('/:id')
  public getRecipe(@Param('id') id) {
    if (id === '*') {
      return this.punkApiService.getRandomBeer();
    }

    return this.punkApiService.getBeer(id);
  }
}
