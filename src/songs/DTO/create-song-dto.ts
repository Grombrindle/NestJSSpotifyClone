import { ArrayNotEmpty, IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";
export class CreateSongDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    // @IsString()
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}