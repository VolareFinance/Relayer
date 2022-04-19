import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Contract, ethers } from 'ethers';
import { ConfigService } from '@nestjs/config';
import { greetingABI } from '../source/greeting.abi';

@Injectable()
export class GreetingService {
  private greeting: Contract;
  constructor(
    private readonly httpService: HttpService,
    private readonly provider: ethers.providers.BaseProvider,
    configService: ConfigService,
  ) {
    this.greeting = new ethers.Contract(
      '0x68d64350CD495e832B95472B6655f2A4705C209c',
      //'0xC2659bCF3aA22E6EFD04bD8133aaAAa07778F96f',
      greetingABI,
      ethers.getDefaultProvider('ropsten'),
    );

    // const manager = new ethers.Wallet(
    //   configService.get<string>('PRIVATE_KEY'),
    //   ethers.getDefaultProvider('rinkeby'),
    // );
    //
    // this.greeting = this.greeting.connect(manager);
  }

  public async greet(): Promise<any> {
    const res = await this.greeting.greet();
    console.log(res);
  }
}
