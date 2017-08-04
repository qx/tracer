"use strict";
var colors = require('colors'); //~1.0.3
var tracer = require('tracer');
var clc = require('cli-color');

// var conf = {
//     filters: {
//         log: clc.black.bgWhite,
//         trace: clc.magenta,
//         debug: clc.cyan,
//         info: clc.green,
//         warn: clc.xterm(202).bgXterm(236),
//         error: clc.red.bold
//     }
// };

console.log(clc.black.bgWhite('hello'), clc.black.bgBlue('world'), clc.black.bgMagenta("yoxi"));
// var logger = require('tracer').console(conf);
// logger.log('hello');
// logger.trace('hello', 'world');
// logger.debug('hello %s',  'world', 123);
// logger.info('hello %s %d',  'world', 123, {foo:'bar'});
// logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});


var log = tracer.colorConsole({
    level: 'debug',
    format: [
        "| {{timestamp}} | METHOD NAME:{{method}}  |-{{title}} {{message}}"
        // "METHOD NAME:{{method}} |-<<{{title}}>> -|{{message}}"
    ],
    filters: {
        log: clc.black.bgWhite,
        trace: clc.magenta,
        debug: clc.cyan,
        info: clc.green,
        warn: clc.xterm(202).bgXterm(236),
        error: clc.red.bold
    },
    methods: ['trace', 'debug', 'info', 'warn', 'error', 'stack']
});

function test() {
    log.info("in test")
}

log.info('info');

log.trace('trace');

log.warn('warn');

log.error('error');

log.stack('stack');


// test();