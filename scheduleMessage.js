require('dotenv').config();
const axios = require('axios');

const token = process.env.SLACK_BOT_TOKEN;
const channelId=process.env.SLACK_CHANNEL_ID;
const postAt = Math.floor(Date.now() / 1000) + 60;

axios.post('https://slack.com/api/chat.scheduleMessage', {
  channel: channelId,
  text: 'This is a scheduled message! ',
  post_at: postAt
}, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if(response.data.ok) {
    console.log(`Message scheduled successfully for ${new Date(postAt * 1000).toLocaleString()}`);
  } else {
    console.log('Error:', response.data.error);
  }
})
.catch(error => {
  console.error(' Request failed:', error.message);
});
