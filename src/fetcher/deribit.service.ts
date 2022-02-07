import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DeribitService {
  constructor(private readonly httpService: HttpService) {}
  async orderBook(symbol: string): Promise<any> {
    return await this.httpService
      .post('https://www.deribit.com/api/v2', {
        jsonrpc: '2.0',
        id: 8772,
        method: 'public/get_order_book',
        params: {
          instrument_name: 'BTC-11FEB22-36000-C',
          depth: 5,
        },
      })
      .toPromise();
  }
}
