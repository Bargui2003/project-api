import { Client } from 'src/client/entities/client.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity("user")
export class User {
@PrimaryGeneratedColumn()
id:number
@Column("text",{name:'userName',unique:true,nullable:true})
userName:string
@Column("text",{name:'email',nullable:true})
email:string
@Column("text",{name:'firstName',nullable:true})
firstName:string
@Column("text",{name:'lastName',nullable:true})
lastName:string
@Column("text",{name:'password',nullable:true})
password:string
@Column("text",{name:'token',nullable:true})
token:string



@OneToMany(() => Client, (clientTable:Client) => clientTable.userId, { cascade: true })
clients:Client[]

}
