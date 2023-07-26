import { Injectable } from '@nestjs/common';
import { request } from 'undici';

@Injectable()
export class PunkApiService {
  public async getBeers(page = 1, perPage = 5) {
    const { body } = await request(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`,
    );

    const beers = await body.json();

    console.log(beers);

    return beers;
  }

  public async getBeer(id: number | string = 1) {
    const { body } = await request(`https://api.punkapi.com/v2/beers/${id}`);

    const beer = await body.json();

    console.log(beer);

    return beer;
  }

  public async getRandomBeer() {
    return this.getBeer('random');
  }
}
