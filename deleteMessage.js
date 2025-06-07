require('dotenv').config();
const axios = require('axios');

const token = process.env.SLACK_BOT_TOKEN;
const channelId=process.env.SLACK_CHANNEL_ID;

const messageTs = '1749294889.835889'; 

axios.post('https://slack.com/api/chat.delete', {
  channel: channelId,
  ts: messageTs,
}, {
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if(response.data.ok) {
    console.log('Message deleted successfully!');
  } else {
    console.log('Error:', response.data.error);
  }
})
.catch(error => {
  console.error('Request failed:', error.message);
});
