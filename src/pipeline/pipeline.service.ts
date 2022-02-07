import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BinanceService } from '../fetcher/binance.service';
import { VolareService } from '../feeder/volare.service';
import { ConfigService } from '@nestjs/config';
import { DeribitService } from '../fetcher/deribit.service';

@Injectable()
export class PipelineService {
  private readonly WETH: string;
  constructor(
    private readonly binanceService: BinanceService,
    private readonly volareSerive: VolareService,
    private readonly deribitService: DeribitService,
    configService: ConfigService,
  ) {
    this.WETH = configService.get<string>('WETH');
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async fetchFromBinance() {
    const res = await this.binanceService.spot('ETH');
    const setRealTimePrice = await this.volareSerive.setRealTimePrice(
      this.WETH,
      String(Number(res.data.price) * 100),
    );
    const settled = await this.volareSerive.getPrice(this.WETH);
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async fetchFromDeribit() {
    const res = await this.deribitService.orderBook('ETH');
  }
}
