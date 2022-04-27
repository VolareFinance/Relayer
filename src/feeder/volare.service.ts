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
      '0x636412c67522270498a17047ec8f3fd41905d9a2',
      mockOracleABI,
      ethers.getDefaultProvider('ropsten'),
    );

    const manager = new ethers.Wallet(
      configService.get<string>('PRIVATE_KEY'),
      ethers.getDefaultProvider('ropsten'),
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
    WETH: string,
    date: number,
    latestPrice: string,
    result: boolean,
  ) {
    return await this.mockOracle.setExpiryPriceFinalizedAllPeriodOver(
      WETH,
      date,
      latestPrice,
      result,
    );
  }

  async setChainlinkRounData(
    WETH: string,
    roundId: number,
    latestPrice: string,
    timeStamp: number,
  ) {
    return await this.mockOracle.setChainlinkRoundData(
      WETH,
      roundId,
      latestPrice,
      timeStamp,
    );
  }
}
