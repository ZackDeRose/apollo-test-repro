import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

export const ALL_ENTITIES_QUERY = gql`
  {
    entity {
      name
    }
  }
`;

export interface Entity {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApolloService {
  constructor(private apollo: Apollo) {}

  public getAllEntitiesFromDefault(): Observable<Entity[]> {
    return this.apollo
      .query<{ entity: Entity[] }>({
        query: ALL_ENTITIES_QUERY
      })
      .pipe(map(x => x.data.entity));
  }

  public getAllEntitiesFromNamed(): Observable<Entity[]> {
    return this.apollo
      .use('bar')
      .query<{ entity: Entity[] }>({
        query: ALL_ENTITIES_QUERY
      })
      .pipe(map(x => x.data.entity));
  }
}
