import { Request, Response, NextFunction } from 'express';
import Event from '../../models/entities/events';

type Custom_Req = Request & {
  user?: any;
};

export default async function get_all_events(_req: Custom_Req, res: Response, next: NextFunction) {
  try {
    // const events = await Event.find({}).populate('created_by');
    const events = await Event.find({});
    res.send({
      status: 'success',
      data: events,
    });
  } catch (error) {
    next(error);
  }
}
