import { CSVADDRESS, CSVNAME } from '../config';

import { fileSize } from "."
import { RedisPersist } from "../services"


const setToRedis = async () => {
  await RedisPersist.set(CSVNAME, JSON.stringify(fileSize(CSVADDRESS)))
}

export const readFileOrNot = async () => {

  const currentSize = fileSize(CSVADDRESS)
  const sizeExsist = await RedisPersist.exists(CSVNAME) 

  if(sizeExsist) {

    const size = await RedisPersist.get(CSVNAME)

    // means we already read this file exactly ( almost exactly :) )
    if (Number(size) == currentSize) return true

    else await setToRedis()
    
  }

  await setToRedis()

  // mean read file 
  return false
}


