"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQueryWithLogging = void 0;
const common_1 = require("@nestjs/common");
async function executeQueryWithLogging(logger, user, nameFunction, successMessage = 'Operation successful', action) {
    try {
        const result = await action();
        return {
            statusCode: 200,
            message: successMessage,
            data: result,
        };
    }
    catch (error) {
        logger.error(`Failed to execute query in ${nameFunction} for user "${user}". Error: ${error.message}`);
        if (error instanceof common_1.HttpException) {
            throw error;
        }
        throw new common_1.InternalServerErrorException();
    }
}
exports.executeQueryWithLogging = executeQueryWithLogging;
//# sourceMappingURL=query-helpers.js.map