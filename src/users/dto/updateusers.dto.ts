import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createusers.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  // Additional properties can be added here if needed
}
