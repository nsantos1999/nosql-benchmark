import { CreateLogDto } from 'src/modules/log/dto/create-log.dto';
import { Log } from '../entities/log.entity';

export interface LogRespository {
  create(createLogDto: CreateLogDto): Promise<Log>;
  bulkInsert(createLogsDto: CreateLogDto[]): Promise<void>;
  findAll(): Promise<Log[]>;
  count(): Promise<number>;
}
