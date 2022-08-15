import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Contract, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { optionMarketABI } from '../source/option-market.abi';
import { optionMarketViewerABI } from '../source/option-market-viewer.abi';

@Injectable()
export class LyraService {
    private optionMarket: Contract;
    private optionMarketViewer: Contract;
    constructor(
        private readonly httpService: HttpService,
        private readonly provider: ethers.providers.BaseProvider,
        configService: ConfigService,
    ) {
        const optimismProvider = new ethers.providers.JsonRpcProvider(
            'https://optimism-mainnet.infura.io/v3/644c9f96ba9045548c4639afbd33bcb0',
            { name: 'optimism', chainId: 10 },
        );
        this.optionMarket = new ethers.Contract(
            '0x1f6D98638Eee9f689684767C3021230Dd68df419',
            optionMarketABI,
            optimismProvider,
        );

        this.optionMarketViewer = new ethers.Contract(
            '0x43592bffCF14f1e0A096091E125f023B2ccC2525',
            optionMarketViewerABI,
            optimismProvider,
        );

        const manager = new ethers.Wallet(
            configService.get<string>('PRIVATE_KEY'),
            optimismProvider,
        );

        this.optionMarket = this.optionMarket.connect(manager);
        this.optionMarketViewer = this.optionMarketViewer.connect(manager);
    }

    public async getLiveBoards(): Promise<any> {
        return await this.optionMarket.getLiveBoards();
    }

    public async optionBoards(boardId: number): Promise<any> {
        return await this.optionMarket.optionBoards(boardId);
    }

    public async getListingView(listingId: number): Promise<any> {
        return await this.optionMarketViewer.getListingView(listingId);
    }

    public async getPremiumForOpen(
        listingId: number,
        tradeType: number,
        amount: number,
    ): Promise<any> {
        return await this.optionMarketViewer.getPremiumForOpen(
            listingId,
            tradeType,
            amount,
        );
    }
}
