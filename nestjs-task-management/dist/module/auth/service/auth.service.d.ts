import { UserRepository } from '../repository/user.repository';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { BaseResponse } from '../../../common/base-response';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: UserRepository);
    signUp(authCredentialSto: AuthCredentialsDto): Promise<BaseResponse<any>>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<BaseResponse<any>>;
}
