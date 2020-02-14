import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Column } from '@libs/db/models/column.mode';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';



@Crud({
    model:Column
})
@ApiTags('专栏')
@Controller('columns')
export class ColumnsController {
    constructor(@InjectModel(Column) private readonly model:ReturnModelType<typeof Column>){

    }
}
