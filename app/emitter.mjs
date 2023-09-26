import EventEmitter from 'events';

const myEmitter = new EventEmitter();

myEmitter.on('hello', () => {
  console.log('hello my dear friend');
});

export default myEmitter;