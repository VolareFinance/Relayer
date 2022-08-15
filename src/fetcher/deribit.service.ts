import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class DeribitService {
    constructor(private readonly httpService: HttpService) {}
    async orderBook(
        symbol: string,
        strikePrice: number,
        Direction: string,
    ): Promise<any> {
        const payload = {
            jsonrpc: '2.0',
            id: 8772,
            method: 'public/get_order_book',
            params: {
                instrument_name:
                    symbol +
                    '-18FEB22-' +
                    strikePrice.toString() +
                    '-' +
                    (Direction == 'CALL' ? 'C' : 'P'),
                depth: 5,
            },
        };
        return await this.httpService
            .post('https://www.deribit.com/api/v2', payload)
            .toPromise();
    }
}
