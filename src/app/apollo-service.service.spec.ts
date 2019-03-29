import { TestBed } from '@angular/core/testing';
import {
  ApolloTestingController,
  ApolloTestingModule
} from 'apollo-angular/testing';
import { ApolloService, ALL_ENTITIES_QUERY } from './apollo-service.service';

describe('ApolloServiceService', () => {
  let service: ApolloService;
  let apolloController: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApolloTestingModule]
    }),
      (service = TestBed.get(ApolloService));
    apolloController = TestBed.get(ApolloTestingController);
  });

  afterEach(() => apolloController.verify());

  it('should be created', () => {
    const service: ApolloService = TestBed.get(ApolloService);
    expect(service).toBeTruthy();
  });

  describe('getAllEntitiesFromDefault()', () => {
    it('general test', () => {
      service.getAllEntitiesFromDefault().subscribe(entities => {
        const expected = [{ name: 'foo' }, { name: 'bar' }];
        expect(entities).toEqual(expected);
      });
      const testOperation = apolloController.expectOne(ALL_ENTITIES_QUERY);
      const mockResponse = {
        data: {
          entity: [{ name: 'foo' }, { name: 'bar' }]
        }
      };
      testOperation.flush(mockResponse);
      apolloController.verify();
    });
  });

  describe('getAllEntitiesFromNamed()', () => {
    it('general test', () => {
      service.getAllEntitiesFromNamed().subscribe(entities => {
        const expected = [{ name: 'foo' }, { name: 'bar' }];
        expect(entities).toEqual(expected);
      });
      const testOperation = apolloController.expectOne(ALL_ENTITIES_QUERY);
      const mockResponse = {
        data: {
          entity: [{ name: 'foo' }, { name: 'bar' }]
        }
      };
      testOperation.flush(mockResponse);
      apolloController.verify();
    });
  });
});
