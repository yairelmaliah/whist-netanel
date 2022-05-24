import { Injectable, NotFoundException } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) { }

  async findAll() {
    return this.productRepository.find({})
  }

  async findOne(id: number) {
    const product = await this.productRepository.findOne(id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`)
    }
    return product
  }

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product)
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepository.update(
      id , updateProductDto
    )
     
    return product.raw
  }

  async remove(id: number) {
    return this.productRepository.delete({id})
  }
}
