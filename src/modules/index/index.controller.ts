import { Request, Response, NextFunction } from 'express';

class IndexController {
    index = (req: Request, res: Response, next: NextFunction) => {
        try {
            res.status(200).json({
                message: 'API successfully!',
            });
        } catch (error) {
            next(error);
        }
    };
}

export default IndexController;
