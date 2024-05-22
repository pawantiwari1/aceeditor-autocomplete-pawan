import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MetaInfoModel } from './../models/metadata.model';

const metainfo: MetaInfoModel[] = [
  {
    Name: 'rajan',
    Children: [],
    Description: 'rajan test keyword',
    Type: 'keyword',
  },
  {
    Name: 'Employee id',
    Children: [
      {
        Name: 'Equal',
        Description: 'is string equal',
        Children: [],
        Type: 'bool',
        InputParameters: { otherString: 'string' },
      },
    ],
    Description: '',
    Type: 'string',
  },
  {
    Name: 'Employee Age',
    Children: [
      {
        Name: 'Equal',
        Description: 'is string equal',
        Children: [],
        Type: 'bool',
        InputParameters: { otherString: 'string' },
      },
    ],
    Description: '',
    Type: 'string',
  },
  {
    Name: 'Salary',
    Children: [
      {
        Name: 'Equal',
        Description: 'is string equal',
        Children: [],
        Type: 'bool',
        InputParameters: { otherString: 'string' },
      },
    ],
    Description: '',
    Type: 'string',
  },
  {
    Name: 'Credit Score',
    Children: [
      {
        Name: 'Equal',
        Description: 'is string equal',
        Children: [],
        Type: 'bool',
        InputParameters: { otherString: 'string' },
      },
    ],
    Description: '',
    Type: 'string',
  },
  {
    Name: 'WebApi',
    Description: 'container for web api methods',
    Children: [
      {
        Name: 'GetRoleById',
        Description: 'Get role information by unique identifier',
        Type: 'Role',
        Children: [],
        InputParameters: { roleId: 'int' },
      },
    ],
    Type: 'class',
  },
];

@Injectable()
export class MetadataService {
  constructor() {}

  getMetadata(): Observable<MetaInfoModel[]> {
    return of(metainfo);
  }
}
