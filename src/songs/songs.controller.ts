/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './DTO/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) { }
  @Get()
  findSongs() {
    try {
      // return ' songs ';
      return this.songsService.findSongs();
    }
    catch (e) {
      throw new HttpException('Server error', HttpStatus.INTERNAL_SERVER_ERROR, {
        cause: e,
      })
      // console.log("saaaaaa", e);
    }
  }
  @Get(':id')
  findSong(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    return `song num ${typeof id}`;
  }
  // @Get(':id')
  // findSong(@Param('id') id: string) {
  //   return ' song num ' + id;
  // }

  @Post()
  addSong(@Body() createSongDto: CreateSongDto) {
    // return 'created';
    return this.songsService.create(createSongDto)
  }

  @Put(':id')
  updateSong(@Param('id') id: string) {
    return `updated song id: ${id}`;
  }
  @Delete(':id')
  deleteSong(@Param('id') id: string) {
    return `deleted song id: ${id}`;
  }
}
