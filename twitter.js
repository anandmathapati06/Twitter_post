import { TwitterApi } from "twitter-api-v2";
import dotenv from 'dotenv'
dotenv.config()

// SnZQQnFFQkNTTXN2N1RsaWlOelk6MTpjaQ
// eYKdkJT0J8mXjfzcGDR-XHeNdGXKdqx1UPLuSG0TAgOYD_TpRI
// eYKdkJT0J8mXjfzcGDR-XHeNdGXKdqx1UPLuSG0TAgOYD_TpRI
const client = new TwitterApi({
 appKey: process.env.APP_KEY,
 appSecret : process.env.APP_SCERET,
//  bearerToken: 'AAAAAAAAAAAAAAAAAAAAAOouyQEAAAAAp0sUtoJyAlzM9wWGEq1gi9KYdQE%3DA5F6097VLVD0cRdwDT9RCcKVXfsdoFZNcyIWA1BO09X1dTPf3j', 
 accessToken : process.env.ACCESS_TOKEN,
 accessSecret : process.env.ACCESS_SCERET,
})

const rwClient = client.readWrite;

async function postTweet(para) {
  try {
    const result = await rwClient.v2.tweet(para)

    console.log('Tweet posted successfully:', result.data.id); 
  } catch (error) {
    console.log('Error posting tweet:', error);
  }
}

export {postTweet}