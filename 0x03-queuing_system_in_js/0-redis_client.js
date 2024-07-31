import redis from 'redis'

// Create a Redis client
const client = redis.createClient({
  host: '127.0.0.1',                                                                                                                                                            port: 6379                                                                                                                                                                  });

// Log message when connected to Redis
client.on('connect', () => {
  console.log('Redis client connected to the server');
});

// Log message when an error occurs
client.on('error', (err) => {
  console.error(`Redis client not connected to the server: ${err.message}`);
});
