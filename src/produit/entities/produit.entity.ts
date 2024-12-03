import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Commande } from 'src/commande/entities/commande.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable, Column } from 'typeorm';
@Entity("produit")
export class Produit {
  
@PrimaryGeneratedColumn()
id:number

@Column("text",{name:'ProduitName',unique:true,nullable:true})
produitName:string

@Column("text",{name:'ProduitType',nullable:true})
produittype:string

@Column("text",{name:'Produitprice',nullable:true})
produitprice:string







@ManyToMany(() => Commande, (commandeTable:Commande) => commandeTable.produits, )
  @JoinTable()
  commandes:Commande[];


@OneToMany(() => CommandeDetail, (commandeDetailTable:CommandeDetail) => commandeDetailTable.produit)
commandeDetails:CommandeDetail
}