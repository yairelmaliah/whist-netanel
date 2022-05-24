import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "db",
      port: 5432,
      username: "postgres",
      password: "pass123",
      database: "postgres",
      autoLoadEntities: true,
      synchronize: true

    }), OrdersModule]
})
export class AppModule { }
