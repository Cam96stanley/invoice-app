import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Invoice } from 'src/entities/invoice.entity';
import { Item } from 'src/entities/item.entity';
import { ItemsModule } from './items/items.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User, Invoice, Item],
      synchronize: true,
    }),
    UsersModule,
    ItemsModule,
    InvoicesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
