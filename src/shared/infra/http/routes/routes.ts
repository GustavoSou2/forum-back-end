import {Request, Response, Router} from 'express'
import {userRoutes} from "../../../../modules/user/infra/http/routes/user.routing";
import { postRoutes } from '../../../../modules/post/infra/http/routes/post.routing';

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    res.send('Forum API 🔥🔥🔥🚀')
})
routes.use('/users', userRoutes)
routes.use('/posts', postRoutes)


export { routes }