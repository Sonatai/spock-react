import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('*summary.json', async () => {
        return new HttpResponse(
            JSON.stringify({
                name: '',
            }),
            {
                status: 200,
            }
        );
    }),
];
