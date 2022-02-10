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
      '0x5228f7dd69dde15b6c2522dedce032481dcb402b',
      mockOracleABI,
      ethers.getDefaultProvider('rinkeby'),
    );

    const manager = new ethers.Wallet(
      configService.get<string>('PRIVATE_KEY'),
      ethers.getDefaultProvider('rinkeby'),
    );

    this.mockOracle = this.mockOracle.connect(manager);
  }

  public async setRealTimePrice(asset: string, price: string): Promise<any> {
    return await this.mockOracle.setRealTimePrice(asset, price);
  }

  public async getPrice(asset: string): Promise<any> {
    return await this.mockOracle.getPrice(asset);
  }
}
