import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity("Client")
export class Client {
    @PrimaryGeneratedColumn()
    id:number
    @Column("text",{name:'firstName',nullable:true})
    firstName:string
    @Column("text",{name:'lastName',nullable:true})
    lastName:string
    @Column("text",{name:'email',nullable:true})
    email:string
    @Column("text",{name:'password',nullable:true})
    password:string
    @Column("text",{name:'adresse',nullable:true})
    adresse:string
    @Column("text",{name:'ville',nullable:true})
    ville:string
    }