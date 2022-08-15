import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Contract, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { mockOracleABI } from '../source/mock-oracle.abi';

@Injectable()
export class VolareService {
    private mockOracle: Contract;
    constructor(
        private readonly httpService: HttpService,
        private readonly provider: ethers.providers.BaseProvider,
        configService: ConfigService,
    ) {
        this.mockOracle = new ethers.Contract(
            '0xcffe550c38f8159f4c162946fb699cb15d1f19e2',
            mockOracleABI,
            new ethers.providers.JsonRpcBatchProvider(
                'https://api.avax-test.network/ext/bc/C/rpc',
            ),
        );

        const manager = new ethers.Wallet(
            configService.get<string>('PRIVATE_KEY'),
            new ethers.providers.JsonRpcBatchProvider(
                'https://api.avax-test.network/ext/bc/C/rpc',
            ),
        );

        this.mockOracle = this.mockOracle.connect(manager);
    }

    public async setRealTimePrice(asset: string, price: string): Promise<any> {
        return await this.mockOracle.setRealTimePrice(asset, price);
    }

    public async getPrice(asset: string): Promise<any> {
        return await this.mockOracle.getPrice(asset);
    }

    async setExpiryPriceFinalizedAllPeriodOver(
        asset: string,
        date: number,
        latestPrice: string,
        result: boolean,
    ) {
        return await this.mockOracle.setExpiryPriceFinalizedAllPeiodOver(
            asset,
            date,
            latestPrice,
            result,
        );
    }

    async setChainlinkRoundData(
        asset: string,
        roundId: number,
        latestPrice: string,
        timeStamp: number,
    ) {
        return await this.mockOracle.setChainlinkRoundData(
            asset,
            roundId,
            latestPrice,
            timeStamp,
        );
    }
}
