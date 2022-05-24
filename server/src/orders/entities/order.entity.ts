import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  productId: number

  @CreateDateColumn()
  date: Date
}
