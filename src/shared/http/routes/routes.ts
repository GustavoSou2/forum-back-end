import { Router } from 'express'
import {userRoutes} from "../../../modules/user/infra/http/routes/user.routing";

const routes = Router();

routes.use('/users', userRoutes)

export { routes }