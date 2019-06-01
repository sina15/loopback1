import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Person extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'object',
  })
  address?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}
