import { LogCassandraRepository } from '../repositories/implementations/log.cassandra.repository';
import { LogMongoDbRepository } from '../repositories/implementations/log.mongodb.repository';

export const providersConfig = {
  LogRepository: {
    provide: 'LogRepository',
    useClass: LogCassandraRepository,
  },
};
