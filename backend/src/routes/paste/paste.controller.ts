import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PasteService } from "./paste.service";
import { PasteRequest } from "./types/paste.types";

@Controller("/paste")
export class PasteController {
  constructor(private readonly pasteService: PasteService) {}

  @Get(":pasteId")
  public async getPaste(@Param() params: any) {
    try {
      return await this.pasteService.getPaste(params.pasteId);
    } catch (err) {
      console.error(err);
    }
  }

  @Post()
  public async createPaste(@Body() body: PasteRequest) {
    try {
      return await this.pasteService.createPaste(body);
    } catch (err) {
      console.error(err);
    }
  }
}
