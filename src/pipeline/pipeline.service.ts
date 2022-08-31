import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../fetcher/binance.service';
import { VolareService } from '../feeder/volare.service';
import { ConfigService } from '@nestjs/config';
import { DeribitService } from '../fetcher/deribit.service';
import { LyraService } from '../feeder/lyra.service';
import { GreetingService } from '../feeder/greeting.service';
import { BigNumber } from 'ethers';
import * as moment from 'moment';

@Injectable()
export class PipelineService {
    private readonly WETH: string;
    private readonly USDC: string;
    private readonly USDT: string;
    private readonly cUSDC: string;
    private readonly DAI: string;
    private readonly WBTC: string;
    private readonly AVAX: string;

    constructor(
        private readonly binanceService: BinanceService,
        private readonly volareSerive: VolareService,
        private readonly deribitService: DeribitService,
        private readonly lyraService: LyraService,
        private readonly greetingService: GreetingService,
        configService: ConfigService,
    ) {
        this.WETH = configService.get<string>('WETH');
        this.USDC = configService.get<string>('USDC');
        this.USDT = configService.get<string>('USDT');
        this.DAI = configService.get<string>('DAI');
        this.cUSDC = configService.get<string>('cUSDC');
        this.WBTC = configService.get<string>('WBTC');
        this.AVAX = configService.get<string>('AVAX');
    }

    @Cron(CronExpression.EVERY_10_MINUTES)
    async fetchFromBinance() {
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const resETH = await this.binanceService.spot('ETH');
        const resAVAX = await this.binanceService.spot('AVAX');
        const latestETH = BigNumber.from(
            Math.floor(resETH.data.price * 100000000),
        ).toString();
        const latestAVAX = BigNumber.from(
            Math.floor(resAVAX.data.price * 100000000),
        ).toString();
        const latestUSDC = BigNumber.from(100000000).toString();
        console.log(latestETH);
        console.log(latestAVAX);
        console.log(latestUSDC);
        // const setRealTimePriceETH = await this.volareSerive.setRealTimePrice(this.WETH, latestETH);
        // const setRealTimePriceBTC = await this.volareSerive.setRealTimePrice(this.WBTC, latestBTC);

        // option ofter ends ant Friday 8am UTC
        if (
            new Date().getTime() / 1000 >
                moment()
                    .startOf('week')
                    .add(5, 'days')
                    .add(16, 'hours')
                    .unix() &&
            new Date().getTime() / 1000 <
                moment().startOf('week').add(5, 'days').add(17, 'hours').unix()
        ) {
            const setExpiryPriceFinalizedAllPeriodOver_ETH =
                await this.volareSerive.setExpiryPriceFinalizedAllPeriodOver(
                    this.WETH,
                    timestamp,
                    latestETH,
                    true,
                );
            if (setExpiryPriceFinalizedAllPeriodOver_ETH?.hash) {
                console.log(setExpiryPriceFinalizedAllPeriodOver_ETH.hash);
            }
            const setExpiryPriceFinalizedAllPeriodOver_AVAX =
                await this.volareSerive.setExpiryPriceFinalizedAllPeriodOver(
                    this.AVAX,
                    timestamp,
                    latestAVAX,
                    true,
                );
            if (setExpiryPriceFinalizedAllPeriodOver_AVAX?.hash) {
                console.log(setExpiryPriceFinalizedAllPeriodOver_AVAX.hash);
            }
            const setExpiryPriceFinalizedAllPeriodOver_USDC =
                await this.volareSerive.setExpiryPriceFinalizedAllPeriodOver(
                    this.USDC,
                    timestamp,
                    latestUSDC,
                    true,
                );
            if (setExpiryPriceFinalizedAllPeriodOver_USDC?.hash) {
                console.log(setExpiryPriceFinalizedAllPeriodOver_USDC.hash);
            }
        }
    }
}
