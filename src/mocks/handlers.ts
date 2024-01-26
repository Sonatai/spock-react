import { http, HttpResponse } from 'msw';
import mockedSummery from './mockedSummery.json';

export const handlers = [
    http.get('*summary.json', () => {
        return new HttpResponse(JSON.stringify(mockedSummery), {
            status: 200,
        });
    }),
];
