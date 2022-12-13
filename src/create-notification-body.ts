import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationsBody {
    @IsNotEmpty()
    @IsUUID()
    recipientId: string;
    
    @IsNotEmpty()
    @Length(5, 240)
    context: string;
    
    @IsNotEmpty()
    category:    string; 
}