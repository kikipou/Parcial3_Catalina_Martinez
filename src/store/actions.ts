import { dispatch } from '../store';
import { Actions, Screens } from '../types/store';
import { addEvents, deleteEvent, getEvents } from '../utils/firebase';

export const navigate = (screen: Screens) => {
	return {
		action: Actions.NAVIGATE,
		payload: screen,
	};
};

export const addEventAction = async (product: any) => {
    const success = await addEvents(product);
    if (success) {
        return {
            action: Actions.ADDEVENTS,
            payload: product,
        };
    }
    return null;
};

export const getEventsAction = async () => {
    const products = await getEvents();
    return {
        action: Actions.GETEVENTS,
        payload: products,
    };
};

export const deleteEventAction = async (uid: string) => {
    await deleteEvent(uid);

    return {
        action: Actions.DELETEEVENT,
        payload: uid,
    };
};
