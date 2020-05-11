const Stream = require("stream");

const s = new Stream.Transform();
s.push("c");
console.log(s._readableState.buffer.tail);
console.log(s.read());

const s2 = new Stream.Readable();
console.log(s2._readableState.buffer);
