import {IProxy, ProxyModel} from "./proxy-model";
import {isValidObjectId} from "mongoose";
import {NotFoundException} from "../routes/exception";
import {PaymentModel} from "../payment/payment.model";

export class ProxyService {

    public static async findAll() {
        return ProxyModel.find();
    }

    public static async save(dto: IProxy) {
        const newProxy: IProxy = new ProxyModel(dto);
        return await newProxy.save();
    }

    public static async delete(proxyId: string) {
        return ProxyModel.deleteOne({_id: proxyId});
    }

    public static async update(proxyId: string, dto: IProxy) {
        return ProxyModel.updateOne({_id: proxyId}, dto)
    }

}