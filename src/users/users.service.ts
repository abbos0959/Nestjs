import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  async findOneUser(id: number) {
    const user = await this.repo.findOne(id);
    if (!user) {
      throw new NotFoundException("bunday user mavjud emas");
    }
    return user;
  }

  async updateUser(id: number, sal: Partial<User>) {
    const user = await this.findOneUser(id);
    if (!user) {
      throw new NotFoundException("bunday user mavjud emas");
    }
    Object.assign(user, sal);
    return this.repo.save(user);
  }
  async deleteUser(id: string) {
    const user = await this.findOneUser(parseInt(id));
    if (!user) {
      throw new Error("bunday user mavjud emas");
    }
    return this.repo.remove(user);
  }
  async allUser(email: string) {
    return this.repo.find({ email });
  }
}
