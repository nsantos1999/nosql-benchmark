import { Model } from 'mongoose';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLogDto } from '../../dto/create-log.dto';
import { LogRespository } from '../log.repository';
import { CassandraService } from 'src/shared/modules/cassandra/cassandra.service';
import { mapping } from 'cassandra-driver';
import { Log } from '../../entities/log.entity';

@Injectable()
export class LogCassandraRepository implements LogRespository, OnModuleInit {
  logMapper: mapping.ModelMapper<Log>;

  constructor(private cassandraService: CassandraService) {}

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        Log: {
          tables: ['log'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };

    this.logMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('Log');
  }

  async create(createLogDto: CreateLogDto): Promise<Log> {
    return (await this.logMapper.insert(createLogDto)).first();
    // const createdCat = new this.logModel(createLogDto);
    // return createdCat.save();
  }

  async findAll(): Promise<Log[]> {
    return (await this.logMapper.findAll()).toArray();
    // return this.logModel.find({}).limit(10);
  }
}
