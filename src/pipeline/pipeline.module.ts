import { Module } from '@nestjs/common';
import { PipelineService } from './pipeline.service';
import { BinanceService } from '../fetcher/binance.service';
import { HttpModule } from '@nestjs/axios';
import { ScheduleModule } from '@nestjs/schedule';
import { VolareService } from '../feeder/volare.service';
import { ethers } from 'ethers';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { DeribitService } from '../fetcher/deribit.service';
import { LyraService } from '../feeder/lyra.service';
import { GreetingService } from '../feeder/greeting.service';

@Module({
    imports: [HttpModule, ScheduleModule.forRoot(), ConfigModule.forRoot()],
    providers: [
        GreetingService,
        LyraService,
        PipelineService,
        BinanceService,
        VolareService,
        DeribitService,
        ethers.providers.BaseProvider,
        ConfigService,
    ],
})
export class PipelineModule {}
