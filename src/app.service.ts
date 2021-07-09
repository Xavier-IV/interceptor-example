import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return new Promise((res) => {
      setTimeout(() => {
        res('Hello World (that took some time)');
      }, 3000);
    });
  }
}
