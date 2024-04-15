// create an exaple hello world route
import { Controller, Get } from '@nestjs/common';

@Controller('say-hello')
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
