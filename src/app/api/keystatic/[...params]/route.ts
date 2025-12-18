import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '../../../../../keystatic.config';

const handler = makeRouteHandler({
    config: keystaticConfig,
});

export const GET = handler;
export const POST = handler;
