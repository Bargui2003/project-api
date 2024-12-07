import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandeService } from './commande.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('commande')
export class CommandeController {
  constructor(private readonly commandeService: CommandeService) {}

  @Post()
  create(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandeService.create(createCommandeDto);
  }

  @Get("commande-list")
  findAll() {
    return this.commandeService.findAll();
  }

  @Get('commande/:id')
  findOne(@Param('id') id: string) {
    return this.commandeService.findOne(+id);
  }

  @Patch('update-commande/:id')
  update(@Param('id') id: string, @Body() updateCommandeDto: UpdateCommandeDto) {
    return this.commandeService.update(+id, updateCommandeDto);
  }

  @Delete('delete-commande/:id')
  remove(@Param('id') id: string) {
    return this.commandeService.remove(+id);
  }
}
