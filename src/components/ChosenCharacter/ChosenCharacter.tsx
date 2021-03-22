import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { CharacterInterface, ComicInterface, getComics } from '../../services/api';
import { LoadButton } from '../Characters/styles';
import { Container, Content, About, ComicsDiv } from "./styles";



export function ChosenCharacter () {
    const character = useLocation<CharacterInterface>().state;

    const arr: ComicInterface[] = []
    
    const [comics, setComics] = useState(arr);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        getComics(character.id).then(result => {
            setComics(result.data.results)
            setTotal(result.data.total)
        });
     
    }, [character]);

    async function loadMore(): Promise<ComicInterface[]> {
        const offset = comics.length;
        const result = await getComics(character.id, offset);
        const load = [...comics, ...result.data.results];
        return load
    }

    return ( 
       
        <Container>
            <Content key={character.id}>
                <img src=
                {`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`} 
                alt={character.name}
                /> 
                <h2>{character.name}</h2>        
            </Content>

                <About> 
                    {character.description}
                </About>
                <h2>Comics</h2>

            <ComicsDiv>
                {comics.map(comic => {
                        return (
                        <div key={comic.id}>
                        <img src= {`${comic.thumbnail.path}/portrait_medium.${comic.thumbnail.extension}`} alt="comics"/>
                        <p>{comic.title}</p>
                        </div>
                    )
                        })}          
            </ComicsDiv>

            { total > comics.length && 
                <LoadButton>
                <button onClick={async () => setComics(await loadMore())}>Carregar mais</button> 
                </LoadButton>
            }
        </Container>
    );
} 