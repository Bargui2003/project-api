import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Commande } from 'src/commande/entities/commande.entity';
import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
@Entity("produit")
export class Produit {
@PrimaryGeneratedColumn()
id:number
@ManyToMany(() => Commande, (commandeTable:Commande) => commandeTable.produits, )
  @JoinTable()
  commandes:Commande[];
@OneToMany(() => CommandeDetail, (commandeDetailTable:CommandeDetail) => commandeDetailTable.produit)
commandeDetails:CommandeDetail
}