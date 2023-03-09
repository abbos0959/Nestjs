import { Report } from './reports/report.entity';
import { User } from "./users/user.entity";
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ReportsModule } from "./reports/reports.module";
import { ConfigModule } from "@nestjs/config/dist";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: "./.env" }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      // host: "db.sqlite",
      // port: parseInt(<string>process.env.POSTGRES_PORT),
      // username: process.env.POSTGRES_USER,
      // password: process.env.POSTGRES_PASSWORD,
      database: "db.sqlite",
      entities: [User,Report],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
