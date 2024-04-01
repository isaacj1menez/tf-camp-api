import { Schema, model, SchemaTypes } from 'mongoose';


const CamperSchema = new Schema({
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
        type: SchemaTypes.Array,
    },
    tipo_sangre: {
        type: String,
        required: [true, 'Missing tipo_sangre field'],
    },
    medicamentos: {
        type: SchemaTypes.Array,
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
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
    
});

CamperSchema.methods.toJSON = function() {
    const { __v, ...camper } = this.toObject();
    return camper;
}

export default model('Camper', CamperSchema);