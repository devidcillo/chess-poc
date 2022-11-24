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
  describe('retrieving an opening', () => {
    test('opening does not exist', async () => {

      mockProvider
        .given('a opening with ID 100 does not exist')
        .uponReceiving('a request to get a opening')
        .withRequest({
          method: 'GET',
          path: '/opening/100',
          headers: {
            Authorization: like('Bearer 2019-01-14T11:34:18.045Z')
          }
        })
        .willRespondWith({
          status: 404
        });
      return mockProvider.executeTest(async (mockserver) => {
        const api = new API(mockserver.url);

        await expect(api.getOpening('100')).rejects.toThrow(
          'Request failed with status code 404'
        );
        return;
      });
    });
  });
});