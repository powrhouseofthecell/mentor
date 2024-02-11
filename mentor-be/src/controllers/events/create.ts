import { Request, Response, NextFunction } from 'express';
import Event from '../../models/entities/events';

type Custom_Req = Request & {
  user?: any;
};

export default async function create(req: Custom_Req, res: Response, next: NextFunction) {
  try {
    const { event_name, event_date } = req.body;
    if (req.user.role === 'mentor' || req.user.role === 'admin') {
      const event = await Event.create({ event_name, event_date });
      res.send({
        status: 'success',
        data: event,
      });
    } else {
      res.send({
        status: 'error',
        message: 'Only admin/mentor can create events.',
      });
    }
  } catch (error) {
    next(error);
  }
}
