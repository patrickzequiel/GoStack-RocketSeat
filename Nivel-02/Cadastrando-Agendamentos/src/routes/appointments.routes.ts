import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentRouter = Router();

const appointments = []

appointmentRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    const appointment = {
        id: uuid(),
        provider,
        date,
    }

    appointments.push(appointment)

    return response.json(appointments)
});

export default appointmentRouter;
