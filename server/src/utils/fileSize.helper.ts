import fs from 'fs';

export const fileSize = (fileName : string) => {
  const stat = fs.statSync(fileName)
  return stat.size
}