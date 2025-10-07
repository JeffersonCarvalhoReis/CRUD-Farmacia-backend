import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { ProdutoService } from '../services/produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() produto: Produto) {
    return this.produtoService.create(produto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Produto[]> {
    return this.produtoService.findByNome(nome);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() produto: Produto) {
    return this.produtoService.update(produto);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
