import { IsEmail, IsString, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
