import { Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { BdOperation, Operation } from '../../dtos/operation.dto';

@Injectable()
export class CalculatorService {
  bd: BdOperation[] = [];

  operation(operationData: Operation, operation = 'suma') {
    console.log('saludos desde el servicio');
    let result = 0;
    switch (operation) {
      case 'suma':
        result =
          parseInt(operationData.numero1) + parseInt(operationData.numero2);
        break;
      case 'resta':
        result =
          parseInt(operationData.numero1) - parseInt(operationData.numero2);
        break;
      case 'multiplicacion':
        result =
          parseInt(operationData.numero1) * parseInt(operationData.numero2);
        break;
      case 'division':
        result =
          parseInt(operationData.numero1) / parseInt(operationData.numero2);
        break;
      default:
        throw new NotFoundException('Not Valid Operation');
        break;
    }

    const bdOperation: BdOperation = { ...operationData, result: 0 };
    bdOperation.result = result;
    this.saveOperation(bdOperation);
    return bdOperation;
  }

  saveOperation(operation: BdOperation) {
    this.bd.push(operation);
  }

  getAllOperations() {
    return this.bd;
  }
}
