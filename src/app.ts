import { Route } from '@core/interfaces';
import express from 'express';
class App {
    public app: express.Application;
    public port: string | number;

    constructor(routes: Route[]) {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.initializeRoutes(routes);
    }

    private initializeRoutes = (routes: Route[]) => {
        routes.forEach((route) => {
            this.app.use('/', route.router);
        });
    };

    public listen = () => {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    };
}

export default App;
