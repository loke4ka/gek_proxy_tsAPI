import routes from "../routes";
import HTTP_STATUS_CODE from 'http-status-codes'
import {IProxy, ProxyModel} from "./proxy-model";
import {Request, Response} from "express";
import {isValidObjectId, Types} from "mongoose";
import {NotFoundException} from "../routes/exception";
import {ProxyService} from "./proxy-service";


export class proxyController {

    public static async findProxyList(req: Request, res: Response) {
        const result = await ProxyService.findAll();
        await res.status(HTTP_STATUS_CODE.OK).json(result)
    }

    public static async saveProxy(req: Request, res: Response) {
        const dto = req.body;

        const result = ProxyService.save(dto);

        res.status(HTTP_STATUS_CODE.CREATED).json(result)
    }

    public static async deleteProxy(req: Request, res: Response) {
        const proxyId = req.params.proxyId;
        const result = await ProxyService.delete(proxyId);

        res.status(HTTP_STATUS_CODE.OK).json(result)
    }

    public static async updateProxy(req: Request, res: Response) {
        const proxyId = req.params.proxyId;
        const dto = req.body;

        const result = await ProxyService.update(proxyId, dto);

        res.status(HTTP_STATUS_CODE.OK).json(result)
    }

}
