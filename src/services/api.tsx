import axios from 'axios';


export const api = axios.create({
  baseURL : process.env.REACT_APP_MARVEL_BASEURL,
  params: {
    ts:  process.env.REACT_APP_MARVEL_TIMESTAMP,
    hash: process.env.REACT_APP_MARVEL_HASH,
    apikey: process.env.REACT_APP_MARVEL_APIKEY
  }
})

export interface PaginationInterface<Result> {
    data: {
      offset: number,
      limit: number,
      total: number,
      count: number,
      results: Array<Result>
    }
  }

  export interface ComicsInterface {
      resourceURI: string,
      name: string
  }
  
  export interface CharacterInterface {
      id: number,
      name: string,
      description: string,
      thumbnail: {
        path: string,
        extension: string
      },
      comics: {
        items: ComicsInterface[]
      }
      
  }

  export interface ComicInterface {
      id: number,
      title: string,
      issueNumber: number,
      dates: [
        {
          type: string,
          date: Date
        }
      ],
      thumbnail: {
        path: string,
        extension: string
      }

  }

  export async function getCharacters(offset: number = 0): Promise<PaginationInterface<CharacterInterface>> {
    const result = await api.get<PaginationInterface<CharacterInterface>>("/v1/public/characters", {params:{offset}})
    return result.data
  }

  export async function getCharactersByName(nameStartsWith: string = ''): Promise<PaginationInterface<CharacterInterface>> {
    const result = await api.get<PaginationInterface<CharacterInterface>>("/v1/public/characters", {params:{nameStartsWith}})
    return result.data
  }

  export async function getComics(characterId: number, offset: number = 0): Promise<PaginationInterface<ComicInterface>> {
    const result = await api.get<PaginationInterface<ComicInterface>>(`/v1/public/characters/${characterId}/comics`, {params: { offset }})
    return result.data
  }


