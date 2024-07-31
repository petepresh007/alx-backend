import kue from 'kue';

// Create a queue
const queue = kue.createQueue();

/**
 * Sends a notification with the given phone number and message.
 * @param {string} phoneNumber - The phone number to send the notification to.
 * @param {string} message - The message to send.
 */
function sendNotification(phoneNumber, message) {
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);
}

// Process jobs in the 'push_notification_code' queue
queue.process('push_notification_code', (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message);
  done();
});
