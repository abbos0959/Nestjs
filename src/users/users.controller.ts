import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Delete,
  Patch,
} from "@nestjs/common";
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
  AllUser() {
    return this.usersService.allUser();
  }
  @Get("/:id")
  findUser(@Param("id") id: string) {
    return this.usersService.findOneUser(parseInt(id));
  }
}
