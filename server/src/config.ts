require('dotenv-safe').config();

export const PORT = process.env.PORT;

export const CSVNAME = process.env.CSVNAME!
export const CSVADDRESS = './' + CSVNAME