import { Strategy } from 'passport-jwt';
import { UserRepository } from '../module/auth/repository/user.repository';
import { JwtPayload } from './jwt-payload.interfaces';
import { User } from '../module/auth/entity/user.entity';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    private configService;
    constructor(userRepository: UserRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
