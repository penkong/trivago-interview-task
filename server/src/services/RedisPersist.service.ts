import Redis from 'ioredis'

export const RedisPersist = new Redis(process.env.REDIS_URL)

RedisPersist.on('connect', ()=> {
  console.log('connected to redis!')
})

RedisPersist.on('error', (e: Error)=> {
  console.log('redis error!', e)
})

RedisPersist.on('end', ()=> {
  console.log('client disconnected!')
})

