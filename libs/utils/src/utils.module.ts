import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { DatabaseModule } from './database/database.module';

@Module({
  providers: [UtilsService],
  exports: [UtilsService],
  imports: [DatabaseModule],
})
export class UtilsModule {}
