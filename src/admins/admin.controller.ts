/* eslint-disable prettier/prettier */
import {Controller, Post, Body} from '@nestjs/common';
import { CreateAdminDto } from './dtos/createAdmin.dto';
import { AdminsService } from './admin.service';

@Controller('admins')
export class AdminController{
    constructor(private adminService: AdminsService){}
    
    @Post()
    create(@Body() rowInserted : CreateAdminDto) {
      return this.adminService.createAdmin(rowInserted);
    }
}