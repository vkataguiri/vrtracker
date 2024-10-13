import moment from 'moment/moment';
import { useState } from 'react';

export const HelloMsg = () => {
	const goodMorning = new Date().getHours() < 18;

	return <h1 className="text-[32px]">{goodMorning ? '🦞 Bom dia man' : '🦞 Boa noite man'}</h1>;
};
