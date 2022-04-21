import { Module } from '@nestjs/common';
import { LogService } from './services/log.service';
import { LogController } from './controllers/log.controller';
import { providersConfig } from './configs/providers.config';
import { MongooseModule } from '@nestjs/mongoose';
import { Log } from './entities/log.entity';
import { LogSchema } from './entities/mongodb/log.entity';
import { CassandraService } from 'src/shared/modules/cassandra/cassandra.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  controllers: [LogController],
  providers: [LogService, CassandraService, providersConfig.LogRepository],
})
export class LogModule {}
