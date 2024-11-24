import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("client")
export class User {
@PrimaryGeneratedColumn()
id:number
@Column("text",{name:'userName',unique:true,nullable:true})
userName:string
@Column("text",{name:'email',nullable:true})
email:string
@Column("text",{name:'firstName',nullable:true})
firstName:string
@Column()
lastName:string
@Column("text",{name:'password',nullable:true})
password:string


}
