import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BinanceService {
    constructor(private readonly httpService: HttpService) {}
    async spot(symbol: string): Promise<any> {
        return await this.httpService
            .get(
                'https://api.binance.com/api/v3/ticker/price?symbol=' +
                    symbol +
                    'USDT',
            )
            .toPromise();
    }
}
