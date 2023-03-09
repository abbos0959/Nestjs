
import { UpdateUserDto } from "./dtos/update-user.dto";
import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Delete,
  Patch,
  ClassSerializerInterceptor,
  UseInterceptors,
} from "@nestjs/common";
import { SerializeInterceptor } from "src/interceptors/serialize-interceptors";
import { log } from "console";
import { CreateUserDto } from "./dtos/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Post("/signup")
  CreateUser(@Body() body: CreateUserDto) {
    this.usersService.create(body.email, body.password);
  }
  @Get("/all")
  AllUser(@Query("email") email: string) {
    return this.usersService.allUser(email);
  }

  @UseInterceptors(SerializeInterceptor)
  @Get("/:id")
  findUser(@Param("id") id: string) {
    return this.usersService.findOneUser(parseInt(id));
  }
  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    return this.usersService.deleteUser(id);
  }
  @Patch("/:id")
  UpdateUser(@Param("id") id: string, @Body() body: UpdateUserDto) {
    return this.usersService.updateUser(parseInt(id), body);
  }
}
