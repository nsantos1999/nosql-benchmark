import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { chunk } from 'lodash';
import { CreateLogDto } from '../../dto/create-log.dto';
import { Log } from '../../entities/log.entity';
import { LogRespository } from '../log.repository';

@Injectable()
export class LogElasticsearchRepository implements LogRespository {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async create(createLogDto: CreateLogDto): Promise<Log> {
    await this.elasticsearchService.index({
      index: 'log',
      body: createLogDto,
    });

    return createLogDto;
  }

  async bulkInsert(createLogsDto: CreateLogDto[]): Promise<void> {
    // const chunkSize = 70000;

    const createLogsDtoChunked = chunk(createLogsDto, 70000);
    for (const createLogs of createLogsDtoChunked) {
      let data = [];
      for (const createLog of createLogs) {
        data.push({ index: { _index: 'log' } });
        data.push(createLog);
      }
      await this.elasticsearchService.bulk({
        index: 'log',
        body: data,
      });
    }
  }

  async findAll(): Promise<Log[]> {
    await this.elasticsearchService.search({
      index: 'log',
      from: 0,
      size: 500000,
    });

    return [];
    // return data.hits.hits as unknown as Log[];
    // return this.logModel.find({}).limit(10);
  }

  async count(): Promise<number> {
    const data = await this.elasticsearchService.count({
      index: 'log',
    });

    return data.count;
  }
}
