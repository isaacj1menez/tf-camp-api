"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CamperSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'Missing nombre field'],
        unique: true
    },
    edad: {
        type: Number,
        required: [true, 'Missing edad field']
    },
    telefono: {
        type: String,
        required: [true, 'Missing telefono field'],
        unique: true
    },
    iglesia: {
        type: String
    },
    grupo: {
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
});
exports.default = (0, mongoose_1.model)('Camper', CamperSchema);
//# sourceMappingURL=camper.model.js.map