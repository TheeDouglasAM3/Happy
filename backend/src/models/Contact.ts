import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm' 
import Orphanage from './Orphanage'

@Entity('contacts')
export default class Contacts {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  whatsapp: string

  @Column({ nullable: true })
  facebook: string

  @Column({ nullable: true })
  website: string

  @OneToOne(() => Orphanage, orphanage => orphanage.contact)
  @JoinColumn({ name: 'orphanage_id'})
  orphanage: Orphanage
}