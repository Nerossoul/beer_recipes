import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get('/')
  getRecipes(@Query() query) {
    console.log(query);
    return this.recipesService.getRecipes(query.page || 1);
  }

  @Get('/:id')
  async getRecipe(@Param('id') id) {
    return this.recipesService.getRecipe(id);
  }
}
