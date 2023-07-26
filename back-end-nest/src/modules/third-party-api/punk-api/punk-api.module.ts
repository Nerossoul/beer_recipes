import { Module } from '@nestjs/common';
import { PunkApiService } from './punk-api.service';

@Module({
  providers: [PunkApiService],
  exports: [PunkApiService],
})
export class PunkApiModule {}
