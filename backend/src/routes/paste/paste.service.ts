import { Injectable } from "@nestjs/common";
import { RedisService } from "@liaoliaots/nestjs-redis";
import { Redis } from "ioredis";
import { PasteRequest } from "./types/paste.types";
import { generateToken } from "@/utils/generateToken.utils";

@Injectable()
export class PasteService {
  private redis: Redis;
  constructor(private readonly redisService: RedisService) {
    this.redis = this.redisService.getClient();
  }

  public async getPaste(pasteId: string) {
    try {
      return {
        value: await this.redis.get(pasteId),
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  public async createPaste(body: PasteRequest) {
    try {
      const current_token = generateToken();

      if ((await this.getPaste(current_token)).value !== null) {
        return this.createPaste(body);
      }

      await this.redis.set(
        current_token,
        body.value,
        "EX",
        Math.floor(+body.ex),
      );
      return {
        token: current_token,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
