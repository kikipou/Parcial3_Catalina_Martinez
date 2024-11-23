export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	screen: string;
	events: [];
	user: '';
};

export enum Screens {
	'ADMIN' = 'ADMIN',
	'USER' = 'USER',
}

export enum Actions {
	'NAVIGATE' = 'NAVIGATE',
	'ADDEVENTS' = 'ADDEVENTS',
	'GETEVENTS' = 'GETEVENTS',
	'DELETEEVENT' = 'DELETEEVENT',
}
