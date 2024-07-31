// Import the Redis library
import redis from 'redis';

// Create a Redis client for the publisher
const publisher = redis.createClient({
  host: '127.0.0.1',
  port: 6379
});

// Log message when connected to Redis
publisher.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Log message when an error occurs
publisher.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});

/**
 * Publishes a message to the channel after a delay.
 * @param {string} message - The message to publish.
 * @param {number} time - The delay in milliseconds.
 */
function publishMessage(message, time) {
  setTimeout(() => {
    console.log(`About to send message: ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

// Call the publishMessage function with the specified messages and delays
publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
