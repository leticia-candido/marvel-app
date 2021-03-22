import {Link} from 'react-router-dom';
import { Container, Card, LoadButton } from "./styles";
import {useEffect, useState} from 'react';
import {getCharacters, CharacterInterface, getCharactersByName} from '../../services/api'
import { SearchBar } from '../SearchBar/SearchBar';


export function Characters () {
    const arr: CharacterInterface[] = []
    const[text, setText] = useState('');    
    const [characters, setCharacters] = useState(arr);

    useEffect(() => {
        if (text) {
            getCharactersByName(text).then(result => {
                setCharacters(result.data.results)
            })
        }else {
            getCharacters().then(result => {
                setCharacters(result.data.results)
            });
        }
     
    }, [text]);

     async function loadMore(): Promise<CharacterInterface[]> {
        const offset = characters.length;
        const result = await getCharacters(offset);
        const load = [...characters, ...result.data.results];
        return load
    }
    return (
        <>
        <SearchBar value={text} onChange={(search:string) => setText(search)}/>
        <Container >
           {characters.map(character => {
               return (
                   
                <Link key={character.id} to={{pathname : `/character/${character.id}`, state : character }}  >
                    <Card >
                        <img src=
                        {`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} 
                        alt={character.name}
                        /> 
                        <div>
                          <p>{character.name}</p>   
                        </div>
                    </Card>
                 </Link>
               )
           })} 
       </Container>
       
       <LoadButton>
           <button onClick={async () => setCharacters(await loadMore())}>Carregar mais</button> 
        </LoadButton>
           </>
    );
}