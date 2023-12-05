/* eslint-disable prettier/prettier */

import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity('admins')
export class Admin {
    @PrimaryGeneratedColumn()
    admin_id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    permission_type: string;

    @Column({ default: true })
    is_active: boolean;

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash(this.password, 7);
    }

    async validatePassword(password: string): Promise<boolean>{
        return bcrypt.compare(password, this.password);
    }
}