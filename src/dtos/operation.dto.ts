import { IsNotEmpty, IsPositive } from 'class-validator';
export class Operation {
  @IsNotEmpty()
  @IsPositive()
  numero1: string;

  @IsNotEmpty()
  @IsPositive()
  numero2: string;
}

export class BdOperation {
  @IsNotEmpty()
  @IsPositive()
  numero1: string;

  @IsNotEmpty()
  @IsPositive()
  numero2: string;

  @IsNotEmpty()
  @IsPositive()
  result: number;
}
