'use strict';

import * as Hapi from 'hapi' ;
import { locationsHandler, locationHandler } from "./locations/index";
const server = new Hapi.Server();
server.connection({ port: 8081, host: 'localhost' });

server.route({
    method: 'GET',
    path: '/ping',
    handler: function (request, reply) {
        reply('pong');
    }
});

server.route({
    method: 'GET',
    path: '/locations',
    handler: locationsHandler
});

server.route({
    method: 'GET',
    path: '/location/{location}',
    handler: locationHandler
});

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});