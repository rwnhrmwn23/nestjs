import { AuthService } from '../service/auth.service';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { BaseResponse } from '../../../common/base-response';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<BaseResponse<any>>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<BaseResponse<any>>;
}
