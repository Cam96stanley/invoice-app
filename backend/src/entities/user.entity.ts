import { Invoice } from 'src/entities/invoice.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToMany(() => Invoice, (invoice) => invoice.user, {
    cascade: true,
  })
  invoices: Invoice[];
}
