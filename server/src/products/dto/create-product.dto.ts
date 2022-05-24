import { IsString, IsNumber } from "class-validator"
export class CreateProductDto {

  @IsString()
  title: string

  @IsNumber()
  price: number

  @IsString()
  description: string

  @IsString()
  imageUrl: string
}
