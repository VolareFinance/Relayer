import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../fetcher/binance.service';
import { VolareService } from '../feeder/volare.service';
import { ConfigService } from '@nestjs/config';
import { DeribitService } from '../fetcher/deribit.service';
import { LyraService } from '../feeder/lyra.service';
import { GreetingService } from '../feeder/greeting.service';
import { BigNumber } from 'ethers';

@Injectable()
export class PipelineService {
  private readonly WETH: string;
  constructor(
    private readonly binanceService: BinanceService,
    private readonly volareSerive: VolareService,
    private readonly deribitService: DeribitService,
    private readonly lyraService: LyraService,
    private readonly greetingService: GreetingService,
    configService: ConfigService,
  ) {
    this.WETH = configService.get<string>('WETH');
  }

  @Cron(CronExpression.EVERY_5_MINUTES)
  async fetchFromBinance() {
    const res = await this.binanceService.spot('ETH');
    const latestPrice = BigNumber.from(res.data.price * 100)
      .mul(BigNumber.from(10).pow(16))
      .toString();
    const setRealTimePrice = await this.volareSerive.setRealTimePrice(
      this.WETH,
      latestPrice,
    );
    if (setRealTimePrice.hash != undefined) {
      console.log('successfully feeding');
    }
    console.log(
      Math.floor((new Date().getTime() / 1000 - 1650352554) / 300 + 20),
    );
    const setChainLinkRoundData = await this.volareSerive.setChainlinkRounData(
      this.WETH,
      Math.floor((new Date().getTime() / 1000 - 1650352554) / 30 + 20),
      latestPrice,
      new Date().getTime(),
    );
    if (setChainLinkRoundData.hash != undefined) {
      console.log('successfully setChainLinkData');
    }
    // const settled = await this.volareSerive.getPrice(this.WETH);
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchIVFromLyra() {
    const getListingView = await this.lyraService.getListingView(605);
    console.log(
      'Lyra' +
        '  ' +
        new Date().getTime() +
        '  ' +
        parseInt(getListingView[4]._hex) / 10000000000000000,
    );
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchPriceFromLyra() {
    // 0: buy call, 1: sell call; 2: buy put; 3: sell put
    const buyCallPrice = await this.lyraService.getPremiumForOpen(597, 0, 1);
    const sellCallPrice = await this.lyraService.getPremiumForOpen(597, 1, 1);
    const buyPutPrice = await this.lyraService.getPremiumForOpen(597, 2, 1);
    const sellPutPrice = await this.lyraService.getPremiumForOpen(597, 3, 1);
    console.log(
      'Lyra',
      new Date().getTime(),
      Number(buyCallPrice[1]._hex),
      Number(buyPutPrice[1]._hex),
      Number(sellCallPrice[1]._hex),
      Number(sellPutPrice[1]._hex),
    );
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchPriceFromDeribit() {
    const callOrderBook = await this.deribitService.orderBook(
      'ETH',
      3000,
      'CALL',
    );
    const putOrderBook = await this.deribitService.orderBook(
      'ETH',
      3000,
      'PUT',
    );
    const spot = await this.binanceService.spot('ETH');
    console.log(
      'Deribit',
      new Date().getTime(),
      callOrderBook.data.result.best_ask_price * Number(spot.data.price),
      putOrderBook.data.result.best_ask_price * Number(spot.data.price),
      callOrderBook.data.result.best_bid_price * Number(spot.data.price),
      putOrderBook.data.result.best_bid_price * Number(spot.data.price),
    );
  }

  // @Cron(CronExpression.EVERY_30_SECONDS)
  async fetchIVFromDeribit() {
    const res = await this.deribitService.orderBook('ETH', 3200, 'CALL');
    console.log(
      'Deribit' + '  ' + new Date().getTime() + '  ' + res.data.result.mark_iv,
    );
  }
}
