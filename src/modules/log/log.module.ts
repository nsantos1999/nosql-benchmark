import { Module } from '@nestjs/common';
import { LogService } from './services/log.service';
import { LogController } from './controllers/log.controller';
import { providersConfig } from './configs/providers.config';
import { MongooseModule } from '@nestjs/mongoose';
import { Log } from './entities/log.entity';
import { LogSchema } from './entities/mongodb/log.entity';
import { CassandraService } from 'src/shared/modules/cassandra/cassandra.service';
import {
  ElasticsearchModule,
  ElasticsearchService,
} from '@nestjs/elasticsearch';
import * as fs from 'fs';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
    ElasticsearchModule.register({
      node: 'https://localhost:9200',
      auth: {
        username: 'elastic',
        password: 'TM_IikW1Sho+3=2H9Lmq',
      },
      tls: {
        ca: fs.readFileSync('./http_ca.crt'),
        rejectUnauthorized: false,
      },
    }),
  ],
  controllers: [LogController],
  providers: [
    LogService,
    CassandraService,
    // ElasticsearchService,
    providersConfig.LogRepository,
  ],
})
export class LogModule {}
