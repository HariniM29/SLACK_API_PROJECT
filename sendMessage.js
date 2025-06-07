require('dotenv').config();
const axios = require('axios');

const token = process.env.SLACK_BOT_TOKEN;
const channelId=process.env.SLACK_CHANNEL_ID;

axios.post('https://slack.com/api/chat.postMessage', {
  channel: channelId,
  text: 'Hello from my Slack App!',
}, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if(response.data.ok) {
    console.log(' Message sent successfully!');
  } else {
    console.log(' Error:', response.data.error);
  }
})
.catch(error => {
  console.error(' Request failed:', error.message);
});
