import { MainInfoBuilder } from "./MainLoader.service"
import { TrivigoInfoRefinery } from './TrivigoInfoRefinery.service';
import { RedisPersist } from './RedisPersist.service';

// dataBootStraoper function do abstraction for
// fetch data from file , unique it , refine it and add it to db (here redis)
// we consider that on server run maybe file already changed 
// therefor we always read data on server listen start
// but we handle case that maybe info already exist in redis .  
export const dataBootStraper = async () => {
  console.log('data bootStraper called!')

  // makeCsv make CsvReader internally with composition
  const reader = MainInfoBuilder.makeCsv('./events_trivago_case_study.csv')

  // loader make reader read , and put data in reader.events uniquely 
  reader.loader()

  // makeData make events accessible for TrivigoInfoRefinery
  const trivigo = TrivigoInfoRefinery.makeData(reader.events)

  // refiner make info shape ready to save to any kind of db
  // and handle info base of unerstood concepts base of requests
  // it will be accessible on trivigo.refined .
  trivigo.refiner()

  
  for (const [key, val] of Object.entries(trivigo.refined)) {
    const exist = await RedisPersist.exists(key)
    if(exist) continue
    await RedisPersist.hmset(key, ...Object.entries(val))
  }

  reader.events = {}
  trivigo.refined = {}
}
