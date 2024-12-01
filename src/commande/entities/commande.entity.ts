import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("commande")
export class commande {
@PrimaryGeneratedColumn()
id:number
}
