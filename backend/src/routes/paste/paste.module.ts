import { Module } from "@nestjs/common";
import { RedisModule } from "@liaoliaots/nestjs-redis";
import { PasteController } from "./paste.controller";
import { PasteService } from "./paste.service";

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        port: 6379,
      },
    }),
  ],
  controllers: [PasteController],
  providers: [PasteService]
})
export class PasteModule {}
