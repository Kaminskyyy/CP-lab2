import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getIndex() {
    return {};
  }

  @Get('/calc')
  @Render('result')
  getResult(
    @Query('a_num') a: number,
    @Query('b_num') b: number,
    @Query('operation') operation: string,
  ) {
    a = Number(a);
    b = Number(b);

    let result: number | null = null;
    if (operation === '+') result = this.appService.sum(a, b);
    if (operation === '-') result = this.appService.diff(a, b);

    return {
      a,
      b,
      operation,
      result,
    };
  }
}
