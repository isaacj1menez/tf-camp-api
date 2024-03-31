"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CamperSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'Missing nombre field'],
    },
    edad: {
        type: Number,
        required: [true, 'Missing edad field']
    },
    sexo: {
        type: String,
        required: [true, 'Missing sexo field']
    },
    telefono: {
        type: String,
        required: [true, 'Missing telefono field'],
        unique: true
    },
    iglesia: {
        type: String
    },
    talla: {
        type: String,
        required: [true, 'Missing talla field']
    },
    contacto: {
        type: String,
        required: [true, 'Missing contacto field']
    },
    nombre_contacto: {
        type: String,
        required: [true, 'Missing nombre_contacto field']
    },
    telefono_contacto: {
        type: String,
        required: [true, 'Missing telefono_contacto field']
    },
    alergias: {
        type: mongoose_1.SchemaTypes.Array,
    },
    tipo_sangre: {
        type: String,
        required: [true, 'Missing tipo_sangre field'],
    },
    medicamentos: {
        type: mongoose_1.SchemaTypes.Array,
    },
    comentarios: {
        type: String,
    },
    registro: {
        type: String,
        required: true
    },
    fecha_registro: {
        type: String,
        required: true
    }
});
CamperSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v } = _a, camper = __rest(_a, ["__v"]);
    return camper;
};
exports.default = (0, mongoose_1.model)('Camper', CamperSchema);
//# sourceMappingURL=camper.model.js.map