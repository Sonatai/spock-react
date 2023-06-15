import { rest } from 'msw';

export const handlers = [
    rest.get('*summary.json', async (req, res, ctx) => {
        return await res(
            ctx.status(200),
            ctx.json({
                name: '',
            })
        );
    }),
];
