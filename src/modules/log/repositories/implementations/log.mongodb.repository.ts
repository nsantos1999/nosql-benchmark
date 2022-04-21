import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Log, LogDocument } from '../../entities/mongodb/log.entity';
import { CreateLogDto } from '../../dto/create-log.dto';
import { LogRespository } from '../log.repository';

@Injectable()
export class LogMongoDbRepository implements LogRespository {
  constructor(@InjectModel(Log.name) private logModel: Model<LogDocument>) {}

  async create(createLogDto: CreateLogDto): Promise<Log> {
    const createdCat = new this.logModel(createLogDto);
    return createdCat.save();
  }

  async findAll(): Promise<Log[]> {
    return this.logModel.find({});
    // return this.logModel.find({}).limit(10);
  }
}
