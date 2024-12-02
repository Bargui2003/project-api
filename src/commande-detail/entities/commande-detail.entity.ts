import { Commande } from 'src/commande/entities/commande.entity';
import { Produit } from 'src/produit/entities/produit.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity("commande-detail")
export class CommandeDetail {
@PrimaryGeneratedColumn()
id:number
    produit: any;  
     
    @JoinColumn() 
    @ManyToOne(() => Commande, (commande:Commande) => commande.commandeDetails, { onDelete: 'CASCADE' })
        commandeId:number;
    @JoinColumn()
    @ManyToOne(() =>Produit , (produit:Produit) =>produit.commandeDetails)

    produitID:number
}
