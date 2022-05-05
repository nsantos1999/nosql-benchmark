import { Inject, Injectable } from '@nestjs/common';
import { providersConfig } from '../configs/providers.config';
import { CreateLogDto } from '../dto/create-log.dto';
import { LogRespository } from '../repositories/log.repository';

@Injectable()
export class LogService {
  constructor(
    @Inject(providersConfig.LogRepository.provide)
    private readonly logRepository: LogRespository,
  ) {}

  testCreate(createLogDto: CreateLogDto) {
    return this.logRepository.create(createLogDto);
  }
  testBulkInsert(createLogsDto: CreateLogDto[]) {
    return this.logRepository.bulkInsert(createLogsDto);
  }

  async testFindAll() {
    return this.logRepository.findAll();
  }

  async count() {
    return this.logRepository.count();
  }
}
