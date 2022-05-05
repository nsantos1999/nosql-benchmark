import { LogElasticsearchRepository } from '../repositories/implementations/log.elasticsearch.repository';
import { LogMongoDbRepository } from '../repositories/implementations/log.mongodb.repository';

export const providersConfig = {
  LogRepository: {
    provide: 'LogRepository',
    useClass: LogElasticsearchRepository,
  },
};
