import {Router} from 'express'
import {proxyController} from "./proxy-controller";
import {AuthMiddleware} from "../auth/auth.middleware";

const router = Router()

router.get('/', proxyController.findProxyList);
router.post('/', proxyController.saveProxy);
router.delete('/:proxyId', proxyController.deleteProxy);
router.patch('/:proxyId', proxyController.updateProxy);


export default router
