declare namespace NodeJS {
  export interface ProcessEnv {
    CORS_ORIGIN: string;
    PORT: string;
    DATABASE_URL: string;
    REDIS_URL: string;
  }
}
