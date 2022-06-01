import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsUrl, IsUUID, ValidateNested } from "class-validator";
import { createProfileGamesDto } from "./create-profile-games.dto";

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'User_1'
  })
  title: string

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://www.promoview.com.br/uploads/2017/04/b72a1cfe.png'
  })
  imageUrl: string

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário',
    example: 'e9fa4fb9-8482-44d3-a4b5-1f82b1552936'
  })
  userId: string;

  @IsString()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'Corrida'
  })
  genderName: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo a ser adicionado no perfil',
    example: 'fbe611b7-34b1-4739-8b9e-418765b69942',
  })
  gamesId: string;

}
