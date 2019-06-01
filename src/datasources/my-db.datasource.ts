import { inject } from '@loopback/core';
import { juggler } from '@loopback/repository';
import * as config from './my-db.datasource.json';

export class MyDbDataSource extends juggler.DataSource {
  static dataSourceName = 'myDb';

  constructor(
    @inject('datasources.config.myDb', { optional: true })
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
