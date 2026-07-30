import { Redis } from "@upstash/redis";

export const redis = Redis.fromEnv();

export const BEES_KEY = "bees:stats";
