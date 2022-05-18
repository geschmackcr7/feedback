import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    FeedbacksModule,
    RouterModule.register([
      {
        path: 'api/feedbacks',
        module: FeedbacksModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
