import { rest } from 'msw';

export const handlers = [
    rest.get('*summary.json', async (req, res, ctx) => {
        return await res(
            // Respond with a 200 status code
            ctx.status(200),
            ctx.json({
                name: '',
            })
        );
    }),
];
