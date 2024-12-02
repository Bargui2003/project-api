import { CommandeDetail } from 'src/commande-detail/entities/commande-detail.entity';
import { Produit } from 'src/produit/entities/produit.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';

@Entity("commande")
export class Commande {
@PrimaryGeneratedColumn()
id:number
@OneToMany(() => CommandeDetail, (commandeDetailTbale:CommandeDetail) => commandeDetailTbale.commandeId, { cascade: true })
commandeDetails:CommandeDetail[]
@ManyToMany(() => Produit, (produitTable:Produit) => produitTable.commandes, { cascade: true })
  @JoinTable()
  produits:Produit[];
}
