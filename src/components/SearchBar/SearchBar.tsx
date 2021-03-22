import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from './styles';

interface SearchPropsInterface {
    value: string,
    onChange: Function,

}

export const SearchBar = ({value, onChange}: SearchPropsInterface) => {
    function handleChange(event:any) {
        onChange(event.target.value);
    }

    return(
        <Container>
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" value={value} onChange={handleChange} placeholder="Search Character"/>
        </Container>      
    )
}
