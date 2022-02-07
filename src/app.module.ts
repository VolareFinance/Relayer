import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PipelineModule } from './pipeline/pipeline.module';
import { BinanceService } from './fetcher/binance.service';
import { HttpModule } from '@nestjs/axios';
import { VolareService } from './feeder/volare.service';
import { ScheduleModule } from '@nestjs/schedule';
import { PipelineService } from './pipeline/pipeline.service';
import { ethers } from 'ethers';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { DeribitService } from './fetcher/deribit.service';

@Module({
  imports: [HttpModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
  providers: [
    PipelineService,
    BinanceService,
    DeribitService,
    VolareService,
    ethers.providers.BaseProvider,
    ConfigService,
  ],
})
export class AppModule {}
