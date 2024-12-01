import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("produit")
export class produit {
@PrimaryGeneratedColumn()
id:number
}