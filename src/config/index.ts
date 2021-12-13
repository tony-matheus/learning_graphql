import dotenv from 'dotenv';

dotenv.config();

type Config = {
  db: string,
  port: string
}


export const config = <Config>{
  db: process.env.DB,
  port: process.env.PORT
};

