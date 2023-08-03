import {Document, model, Schema, Types} from 'mongoose'

const COLLECTION_NAME = 'Proxy'

// Интерфейс для документа в коллекции "Proxy"
interface IProxy extends Document {
    proxy: string;
    host: string;
    port: number;
    login: string;
    password: string;
    expireDate: Date;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}


const ProxySchema = new Schema<IProxy>({
    proxy: {
        type: String,
        required: true
    },
    host: {
        type: String,
        required: true
    },
    port: {
        type: Number,
        required: true
    },
    login: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    expireDate: {
        type: Date,
        required: false,
        default: null
    },
    isActive: {
        type: Boolean,
        required: true,
        default: true
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
});


const ProxyModel = model<IProxy>('Proxy', ProxySchema, COLLECTION_NAME);

export {IProxy, ProxyModel};
