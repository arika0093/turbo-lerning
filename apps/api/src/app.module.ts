import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostGraphileController } from './postgraphile.controller';

@Module({
  imports: [],
  controllers: [
    PostGraphileController,
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}
