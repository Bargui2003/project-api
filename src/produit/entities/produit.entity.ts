
import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Commande } from 'src/commande/entities/commande.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, Column, BeforeInsert, BeforeUpdate } from 'typeorm';
@Entity("produit")
export class Produit {
  
@PrimaryGeneratedColumn()
id:number

@Column("text",{name:'Title',unique:true,nullable:true})
title:string

@Column("text",{name:'Description',nullable:true})
description:string

@Column("decimal",{name:'Prix-h-tax',nullable:true})
prixtax:number

@Column("decimal",{name:'TVA',nullable:true})
tva:number

@Column("decimal",{name:'TCC',nullable:true})
ttc:number

@Column("decimal",{name:'quantity',nullable:true})
quantity:number

@Column("text",{name:'Type',nullable:true})
type:string

@Column("date",{name:'createAt',nullable:true})
createAT:Date

@Column("date",{name:'updateAt',nullable:true})
updateAT:Date

@Column("integer",{name:'createBy',nullable:true})
createBy:number

@Column("integer",{name:'updateBy',nullable:true})
updateBy:number

@Column("boolean",{name:'Active',nullable:true})
active:boolean




@ManyToMany(() => Commande, (commandeTable:Commande) => commandeTable.produits, )
  @JoinTable()
  commandes:Commande[];


@OneToMany(() => CommandeDetail, (commandeDetailTable:CommandeDetail) => commandeDetailTable.produit)
commandeDetails:CommandeDetail




@BeforeInsert ()
  createDate ()
  {
    this.createAT = new Date()
  }

  
@BeforeUpdate ()
  UpdateDate() {
    this.updateAT = new Date()
  }

}  