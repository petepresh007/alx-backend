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

/**
 * Sets a new school name and value in Redis.
 * @param {string} schoolName - The key.
 * @param {string} value - The value to set for the key.
 */
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

/**
 * Displays the value of a school from Redis.
 * @param {string} schoolName - The key to retrieve the value for.
 */
function displaySchoolValue(schoolName) {
  client.get(schoolName, (err, data) => {
    if(err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
}

// Call the functions as specified
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
