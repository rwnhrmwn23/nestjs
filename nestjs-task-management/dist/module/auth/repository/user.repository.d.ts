import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { BaseResponse } from '../../../common/base-response';
export declare class UserRepository extends Repository<User> {
    protected dataSource: DataSource;
    private jwtService;
    private logger;
    constructor(dataSource: DataSource, jwtService: JwtService);
    createUser(authCredentialsDto: AuthCredentialsDto): Promise<BaseResponse<any>>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<BaseResponse<any>>;
}
