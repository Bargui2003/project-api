import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandeDetailService } from './commande-detail.service';
import { CreateCommandeDetailDto } from './dto/create-commande-detail.dto';
import { UpdateCommandeDetailDto } from './dto/update-commande-detail.dto';

@Controller('commande-detail')
export class CommandeDetailController {
  constructor(private readonly commandeDetailService: CommandeDetailService) {}

  @Post()
  create(@Body() createCommandeDetailDto: CreateCommandeDetailDto) {
    return this.commandeDetailService.create(createCommandeDetailDto);
  }

  @Get()
  findAll() {
    return this.commandeDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commandeDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommandeDetailDto: UpdateCommandeDetailDto) {
    return this.commandeDetailService.update(+id, updateCommandeDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commandeDetailService.remove(+id);
  }
}