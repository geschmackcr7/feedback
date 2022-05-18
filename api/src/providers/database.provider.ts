import { Feedback } from './../entity/feedback.entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'tiny.db.elephantsql.com',
        port: 5432,
        username: 'jwbxfayy',
        password: '3Cq-8IFu5sCVPpBAIX9NwOCyl64q2-bq',
        database: 'jwbxfayy',
        entities: [Feedback],
        synchronize: true,
      }),
  },
];
