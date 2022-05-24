import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {

  constructor(@InjectRepository(Order) private readonly orderRepository: Repository<Order>) { }
  async create(createOrderDto: CreateOrderDto & { data: number[] }) {
    const promisesArray = []

    for (let item of createOrderDto.data) {
      const product = this.orderRepository.create({ productId: item });
      promisesArray.push(this.orderRepository.save(product))
    }

    const result = await Promise.all(promisesArray)
    return result
  }

  findAll() {
    return this.orderRepository.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
