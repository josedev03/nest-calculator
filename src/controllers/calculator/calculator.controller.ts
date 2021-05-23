import { Body, Controller, Get, Header, Post, Redirect } from '@nestjs/common';
import { Operation, BdOperation } from '../../dtos/operation.dto';
import { CalculatorService } from '../../services/calculator/calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) {}

  @Get()
  getAllOperations(): BdOperation[] {
    return this.calculatorService.getAllOperations();
  }

  @Post('suma')
  @Header('Cache-Control', 'none')
  @Redirect('https://www.google.com', 302)
  suma(@Body() payload: Operation): BdOperation {
    console.log('entro');
    return this.calculatorService.operation(payload, 'suma');
  }

  @Post('resta')
  resta(@Body() payload: Operation): BdOperation {
    return this.calculatorService.operation(payload, 'resta');
  }

  @Post('multiplicacion')
  multiplicacion(@Body() payload: Operation): BdOperation {
    return this.calculatorService.operation(payload, 'multiplicacion');
  }

  @Post('division')
  division(@Body() payload: Operation): BdOperation {
    return this.calculatorService.operation(payload, 'aaa');
  }
}
