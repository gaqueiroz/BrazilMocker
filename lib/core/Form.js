"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cnpj_1 = __importDefault(require("../generators/cnpj"));
var cnpj_2 = __importDefault(require("../validators/cnpj"));
var cpf_1 = __importDefault(require("../generators/cpf"));
var cpf_2 = __importDefault(require("../validators/cpf"));
var firstName_1 = __importDefault(require("../generators/firstName"));
var lastName_1 = __importDefault(require("../generators/lastName"));
var fullName_1 = __importDefault(require("../generators/fullName"));
var Form = {
    cnpj: {
        generate: cnpj_1.default,
        validate: cnpj_2.default,
    },
    cpf: {
        generate: cpf_1.default,
        validate: cpf_2.default,
    },
    names: {
        firstName: {
            generate: firstName_1.default,
        },
        lastName: {
            generate: lastName_1.default,
        },
        fullName: {
            generate: fullName_1.default,
        }
    }
};
exports.default = Form;
//# sourceMappingURL=Form.js.map