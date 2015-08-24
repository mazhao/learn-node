// ########################
//  EventEmitter
// ########################
// All objects which emit events are instances of events.EventEmitter.
// You can access this module by doing: require("events");
//
// emitter.addListener(event, listener)
// emitter.on(event, listener)
// emitter.once(event, listener)
// emitter.removeListener(event, listener)#
// emitter.removeAllListeners([event])
// emitter.setMaxListeners(n)
// EventEmitter.defaultMaxListeners#
// emitter.listeners(event)
// emitter.emit(event[, arg1][, arg2][, ...])
// Class Method: EventEmitter.listenerCount(emitter, event)#

// Event: 'newListener'
//   - event String The event name
//   - listener Function The event handler function
// This event is emitted any time a listener is added.
// When this event is triggered, the listener may not yet
// have been added to the array of listeners for the event.

// Event: 'removeListener'
//   - event String The event name
//   - listener Function The event handler function
// This event is emitted any time someone removes a listener.
// When this event is triggered, the listener may not yet have been removed
// from the array of listeners for the event.


// ########################
//  Process
// ########################
// The process object is a global object and can be accessed from anywhere. It is an instance of EventEmitter.
//
// Exit Codes#
// - 1 Uncaught Fatal Exception - There was an uncaught exception,
//     and it was not handled by a domain or an uncaughtException event handler.
// - 2 Unused (reserved by Bash for builtin misuse)
// - 3 Internal JavaScript Parse Error - The JavaScript source code internal in Node's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during development of Node itself.
// - 4 Internal JavaScript Evaluation Failure - The JavaScript source code internal in Node's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during development of Node itself.
// - 5 Fatal Error - There was a fatal unrecoverable error in V8. Typically a message will be printed to stderr with the prefix FATAL ERROR.
// - 6 Non-function Internal Exception Handler - There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called.
// - 7 Internal Exception Handler Run-Time Failure - There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it. This can happen, for example, if a process.on('uncaughtException') or domain.on('error') handler throws an error.
// - 8 - Unused. In previous versions of Node, exit code 8 sometimes indicated an uncaught exception.
// - 9 - Invalid Argument - Either an unknown option was specified, or an option requiring a value was provided without a value.
// - 10 Internal JavaScript Run-Time Failure - The JavaScript source code internal in Node's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during development of Node itself.
// - 12 Invalid Debug Argument - The --debug and/or --debug-brk options were set, but an invalid port number was chosen.
// - 128 Signal Exits - If Node receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard Unix practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code.
