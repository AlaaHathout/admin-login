/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admin.service';
import { AuthLoginDto } from './auth-login.dto';

@Injectable()
export class AuthService {
    constructor(private adminService: AdminsService, private jwtService: JwtService){

    }

    async login(authLoginDto: AuthLoginDto){
        const admin = await this.validateAdmin(authLoginDto);
        const payload = {
            adminId: admin.admin_id  
        };

        return{
            access_token: this.jwtService.sign(payload)
        };
    }

    async validateAdmin(authLoginDto: AuthLoginDto){
        const {email, password} = authLoginDto;
        const admin = await this.adminService.findByEmail(email);
        if(!(await admin?.validatePassword(password))){
            throw new UnauthorizedException();
        }
        return admin;
    }
}