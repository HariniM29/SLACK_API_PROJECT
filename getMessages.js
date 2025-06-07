require('dotenv').config();
const axios = require('axios');

const token = process.env.SLACK_BOT_TOKEN;
const channelId=process.env.SLACK_CHANNEL_ID;

axios.get('https://slack.com/api/conversations.history', {
  headers: {
    Authorization: `Bearer ${token}`
  },
  params: {
    channel: channelId,
    limit: 10  
  }
})
.then(response => {
  if (response.data.ok) {
    console.log(' Recent messages:');
    response.data.messages.forEach(msg => {
      console.log(`- [${msg.ts}] ${msg.text}`);
    });
  } else {
    console.log(' Error:', response.data.error);
  }
})
.catch(error => {
  console.error(' Request failed:', error.message);
});
