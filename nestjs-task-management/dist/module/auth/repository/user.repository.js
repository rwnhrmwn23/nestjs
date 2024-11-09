"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const query_helpers_1 = require("../../../common/query-helpers");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    constructor(dataSource, jwtService) {
        super(user_entity_1.User, dataSource.createEntityManager());
        this.dataSource = dataSource;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger('UserRepository');
    }
    async createUser(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = this.create({ username, password: hashedPassword });
        try {
            await this.save(user);
            return (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'createUser()', 'createUser successfully', () => null);
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.ConflictException('Username already exists');
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        }
    }
    async signIn(authCredentialsDto) {
        const { username, password } = authCredentialsDto;
        const user = await this.findOne({
            where: { username },
        });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { username };
            const accessToken = this.jwtService.sign(payload);
            return (0, query_helpers_1.executeQueryWithLogging)(this.logger, user.username, 'signIn()', 'signIn successfully', () => Promise.resolve({ accessToken }));
        }
        else {
            throw new common_1.UnauthorizedException('Please check your login credentials');
        }
    }
};
UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        jwt_1.JwtService])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map