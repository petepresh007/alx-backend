import kue from 'kue';

// Array of blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Function to send notification
function sendNotification(phoneNumber, message, job, done) {
  // Track the progress of the job
  job.progress(0, 100);

  // Check if the phone number is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job with an error message
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  // Track progress to 50%
  job.progress(50, 100);

  // Log the notification message
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  // Complete the job
  done();
}

// Create a queue
const queue = kue.createQueue();

// Process jobs from the queue
queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
