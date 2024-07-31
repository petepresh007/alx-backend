import redis from 'redis';

const subscribers = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

subscribers.on('connect', () => {
  console.log('Redis client connected to the server');
});

subscribers.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

//subscribe to the holberton channel
subscribers.subscribe('holberton school channel');

//handle incoming messages
subscribers.on('message', (channel, message) => {
  console.log(`Received message: ${message}`);
  // If the message is 'KILL_SERVER', unsubscribe and quit
  if(message === 'KILL_SERVER') {
    subscribers.unsubscribe();
    subscribers.quit();
  }
});
