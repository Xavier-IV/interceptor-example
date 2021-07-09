import { UseInterceptors } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheKey } from './decorator/cache-key.decorator';
import { CacheManagerInterceptor } from './interceptor/cache-manager.interceptor';


@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('greet_key')
  @UseInterceptors(CacheManagerInterceptor)
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('question')
  @CacheKey('question_key')
  @UseInterceptors(CacheManagerInterceptor)
  questionWorld(): string {
    return 'Who is world?';
  }
}
