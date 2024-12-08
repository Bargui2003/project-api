import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Produit } from 'src/produit/entities/produit.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity("commande")
export class Commande {
@PrimaryGeneratedColumn()
id:number
@Column("text",{name:'title',nullable:true})
title:string
@Column("text",{name:'description',nullable:true})
description:string
@Column("decimal",{name:'montatnt-ttc',nullable:true})
montant:number



@OneToMany(() => CommandeDetail, (commandeDetailTbale:CommandeDetail) => commandeDetailTbale.commandeId, { cascade: true })
commandeDetails:CommandeDetail[]

@ManyToMany(() => Produit, (produitTable:Produit) => produitTable.commandes, { cascade: true })
  @JoinTable()
  produits:Produit[];
}
