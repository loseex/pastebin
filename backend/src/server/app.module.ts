import { PasteModule } from "@/routes";
import { Module } from "@nestjs/common";

@Module({
  imports: [PasteModule],
})
export class AppModule {}
