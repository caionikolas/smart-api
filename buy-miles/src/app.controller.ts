import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { milesDto } from './dtos/miles.dto';

@Controller('milhas')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postMiles(@Body() miles: milesDto) {
    return this.appService.postMiles(miles);
  }
}
