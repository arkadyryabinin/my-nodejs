import emitter1 from './emitter.mjs';
import emitter2 from './emitter.mjs';

emitter1.emit('hello');
emitter2.emit('hello');

console.log(emitter1 === emitter2);

  