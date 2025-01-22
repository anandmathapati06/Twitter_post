
import { postTweet } from './twitter.js'
import {CronJob} from 'cron'
const app = express()
import dotenv from 'dotenv'
import { mongoModel ,DBconnection } from './mongodb.js'
dotenv.config()

let i = 0
const con = await ex()
let lastdate = 0

async function  ex(){
    DBconnection()
    let data = await mongoModel.findOne()
    return data.data
}


function example(para,para2){
    
    let day = new Date()

    if(day.getDate() != lastdate){
        postTweet(para2[para])
        lastdate = day.getDate()
        console.log(lastdate)
        return ++para
    }
}



const job = new CronJob('* * * * * *',() =>{i = example(i,con)},null,true)

  
    






