import { Route } from '@core/interfaces';
import { Router } from 'express';
import { IndexController } from '@modules/index';

class IndexRoute implements Route {
    public path = '/';
    public router = Router();
    private indexController = new IndexController();

    constructor() {
        this.intializeRoutes();
    }

    private intializeRoutes = () => {
        this.router.get(this.path, this.indexController.index);
    };
}

export default IndexRoute;
