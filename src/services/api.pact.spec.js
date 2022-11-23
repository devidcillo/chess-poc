import { PactV3 } from '@pact-foundation/pact'
import { API } from './api';
import { MatchersV3 } from '@pact-foundation/pact';
import { Opening } from './opening';
const { eachLike, like } = MatchersV3;
const Pact = PactV3;

const mockProvider = new Pact({
  consumer: 'pactflow-example-consumer',
  provider: process.env.PACT_PROVIDER
    ? process.env.PACT_PROVIDER
    : 'pactflow-example-provider'
});

describe('API Pact test', () => {
  describe('retrieving a openings', () => {
    test('ID 01 exists', async () => {
      const expectedOpening = {
        id: '01',
        type: 'OPENING',
        name: 'Ruy Lopez'
      };

      mockProvider
        .given('a opening with ID 01 exists')
        .uponReceiving('a request to get a opening')
        .withRequest({
          method: 'GET',
          path: '/opening/01',
          headers: {
            Authorization: like('Bearer 2022-11-14T11:34:18.045Z')
          }
        })
        .willRespondWith({
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: like(expectedOpening)
        });
      return mockProvider.executeTest(async (mockserver) => {
        
        const api = new API(mockserver.url);
        const opening = await api.getOpening('01');

        expect(opening).toStrictEqual(new Opening(expectedOpening));
        return;
      });
    });

    test('opening does not exist', async () => {
      mockProvider
        .given('a opening with ID 11 does not exist')
        .uponReceiving('a request to get a opening')
        .withRequest({
          method: 'GET',
          path: '/opening/11',
          headers: {
            Authorization: like('Bearer 2022-11-14T11:34:18.045Z')
          }
        })
        .willRespondWith({
          status: 404
        });
      return mockProvider.executeTest(async (mockserver) => {
        const api = new API(mockserver.url);

        await expect(api.getOpening('11')).rejects.toThrow(
          'Request failed with status code 404'
        );
        return;
      });
    });
  });
  
  describe('retrieving openings', () => {
    test('products exists', async () => {

      const expectedOpening = {
        id: '01',
        type: 'OPENING',
        name: 'Ruy Lopez'
      };

      mockProvider
        .given('products exist')
        .uponReceiving('a request to get all products')
        .withRequest({
          method: 'GET',
          path: '/openings',
          headers: {
            Authorization: like('Bearer 2019-01-14T11:34:18.045Z')
          }
        })
        .willRespondWith({
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: eachLike(expectedOpening)
        });
      return mockProvider.executeTest(async (mockserver) => {
        const api = new API(mockserver.url);

        const openings = await api.getAllOpenings();

        expect(openings).toStrictEqual([new Opening(expectedOpening)]);
        return;
      });
    });
  });
});