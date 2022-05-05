import { Module } from '@nestjs/common';
// import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogModule } from './modules/log/log.module';
import { CassandraModule } from './shared/modules/cassandra/cassandra.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:321987654@localhost:27888/test-performance?authSource=admin',
    ),
    // ElasticsearchModule.register({
    //   node: 'http://localhost:9200',
    //   auth: {
    //     username: 'elastic',
    //     password: 'TM_IikW1Sho+3=2H9Lmq',
    //   },
    // }),
    LogModule,
    CassandraModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
