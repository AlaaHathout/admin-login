/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/typeOrm/entities/admin.entity';
import { CreateAdminParams } from 'src/utils/types';
import { Repository } from 'typeorm';


@Injectable()
export class AdminsService {
    constructor(@InjectRepository(Admin) private adminRepository: Repository<Admin>,){}
    
    createAdmin(adminDetails: CreateAdminParams){
        const newAdmin = this.adminRepository.create({
            ...adminDetails,
        });
        return this.adminRepository.save(newAdmin);
    }

    async findByEmail(email: string){
        return await this.adminRepository.findOne({
            where: {email: email}
        });
    }

    findById(admin_id: number): Promise<Admin | null> {
        return this.adminRepository.findOneBy({ admin_id });
    }
}
