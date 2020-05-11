import { Stream } from "stream";

const s = new Stream.Transform();
s.push("c");
console.log(s.read());
