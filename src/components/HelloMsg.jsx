import moment from 'moment/moment';
import { useState } from 'react';

export const HelloMsg = () => {
	const before7PM = moment(new Date()).isBefore('18:00:00');

	return <div className="text-[32px]">{before7PM ? <h1>🦞 Bom dia man</h1> : <h1>🦞 Boa noite man</h1>}</div>;
};
