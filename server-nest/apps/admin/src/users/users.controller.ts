import { Controller } from '@nestjs/common';
import { User } from '@libs/db/models/user.model';

import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';


@Crud({
    model:User
})
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model:ReturnModelType<typeof User>){

    }
}
