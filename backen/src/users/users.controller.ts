import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController {
    constructor(private userService:UsersService){}
    @Get()
  getUsers(){
    return this.userService.get();
  }
@Post()
store(@Body() createUserDto:CreateUserDto){

    return this.userService.create(createUserDto);
}
@Patch('/:userId')
updata(@Body() updateUserDto:UpdateUserDto,
 @Param('userId',ParseIntPipe) userId :number){
    return this.userService.update(updateUserDto, userId);
}

@Get('/:userId')
getUser(@Param('userId',ParseIntPipe) userId: number){
return this.userService.show(userId);
}

@Delete('/:userId')
deleteUser(@Param('userId', ParseIntPipe) userId:number){
    return this.userService.deleteUser(userId);
}
}
