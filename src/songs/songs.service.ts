/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';

@Injectable()
export class SongsService {

    private readonly songs: any[] = [];

    create(song: any): any[] {
        //Save the song in the db
        this.songs.push(song);
        return this.songs;
    }


    findSongs(): any[] {
        //fetch from dbbbbbbbb
        //testing errors
        throw new Error("asddddddddd");
        return this.songs;
    }


}
