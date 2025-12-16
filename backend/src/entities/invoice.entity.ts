import { Item } from 'src/entities/item.entity';
import { User } from 'src/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum InvoiceStatus {
  DRAFT = 'draft',
  SENT = 'sent',
  UNPAID = 'unpaid',
  PAID = 'paid',
  OVERDUE = 'overdue',
  CANCELED = 'canceled',
}

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fromName: string;

  @Column()
  fromStreet: string;

  @Column()
  fromCity: string;

  @Column()
  fromState: string;

  @Column()
  fromZip: string;

  @Column()
  toName: string;

  @Column()
  toStreet: string;

  @Column()
  toState: string;

  @Column()
  toZip: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  total: string;

  @Column({
    type: 'enum',
    enum: InvoiceStatus,
    default: InvoiceStatus.DRAFT,
  })
  status: InvoiceStatus;

  @Column({ type: 'date' })
  issueDate: Date;

  @Column({ type: 'date' })
  dueDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Item, (item) => item.invoice, {
    cascade: true,
  })
  items: Item[];

  @ManyToOne(() => User, (user) => user.invoices, {
    onDelete: 'SET NULL',
  })
  user: User;
}
