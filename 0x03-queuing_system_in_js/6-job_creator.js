import kue from 'kue'

//create queu
const queue = kue.createQueue();

const job = {
  phoneNumber: '09030912056',
  message: 'Hola Precious',
}

const createdJob = queue.create('push_notification_code', job)
  .save(err => {
    if(!err) {
      console.log(`Notification job created: ${createdJob.id}`)
    } else {
      console.error('Error creating job:', err);
    }
  })

// Handle job completion
createdJob.on('complete', () => {
  console.log('Notification job completed');
});

// Handle job failure
createdJob.on('failed', () => {
  console.log('Notification job failed');
});
