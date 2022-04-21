import { Injectable } from '@nestjs/common';
import { auth, Client, mapping } from 'cassandra-driver';

@Injectable()
export class CassandraService {
  client: Client;
  mapper: mapping.Mapper;
  private createClient() {
    this.client = new Client({
      contactPoints: ['172.19.0.2'],
      keyspace: 'test',
      localDataCenter: 'datacenter1',
      authProvider: new auth.PlainTextAuthProvider('cassandra', ''),
    });
  }

  createMapper(mappingOptions: mapping.MappingOptions) {
    if (this.client == undefined) {
      this.createClient();
    }
    return new mapping.Mapper(this.client, mappingOptions);
  }
}
