import { CSVADDRESS } from '../config';

import { readFileOrNot } from '../utils/';

import { MainInfoBuilder } from "./MainLoader.service"
import { TrivigoInfoRefinery } from './TrivigoInfoRefinery.service';

import { RedisPersist } from './RedisPersist.service';


// dataBootStraoper function do abstraction for
// fetch data from file , unique it , refine it and add it to db (here redis)
// we consider that on server run maybe file already changed 
// therefor we always read data on server listen start
// but we handle case that maybe info already exist in redis or this is exactly prior file .  
export const dataBootStraper = async () => {
  console.log('data bootStraper called!')

  // do we already read this file exactly ? if it so return  
  const alreadyRead = await readFileOrNot()
  console.log(alreadyRead)
  if (alreadyRead) return 

  // makeCsv make CsvReader internally with composition
  const reader = MainInfoBuilder.makeCsv(CSVADDRESS)

  // loader make reader read , and put data in reader.events uniquely 
  reader.loader()

  // makeData make events accessible for TrivigoInfoRefinery
  const trivigo = TrivigoInfoRefinery.makeData(reader.events)

  // refiner make info shape ready to save to any kind of db
  // and handle info base of unerstood concepts base of requests
  // it will be accessible on trivigo.refined .
  trivigo.refiner()

  // add data to redis
  for (const [key, val] of Object.entries(trivigo.refined)) {
    const exist = await RedisPersist.exists(key)
    if(exist) continue
    await RedisPersist.hmset(key, ...Object.entries(val))
  }

  // clean up for memory things
  reader.events = {}
  trivigo.refined = {}
}


