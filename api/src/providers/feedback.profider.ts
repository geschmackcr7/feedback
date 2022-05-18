import { Feedback } from './../entity/feedback.entity';
import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm';

export const feedbackProvider: Provider[] = [
  {
    provide: 'FEEDBACKS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Feedback),
    inject: ['DATABASE_CONNECTION'],
  },
];
