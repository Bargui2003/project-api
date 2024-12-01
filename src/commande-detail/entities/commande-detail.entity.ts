import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("commande-detail")
export class commandeDetail {
@PrimaryGeneratedColumn()
id:number
}