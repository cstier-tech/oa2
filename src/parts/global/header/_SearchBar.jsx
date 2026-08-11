import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Form, Button } from 'react-bootstrap';

function SearchBar() {
    return (
        <div className="shopbar-col shopbar-search">

            <Form action="/search" className="instasearch-form" method="get">
                <Form.Control type="text" className="instasearch-term" name="q" placeholder="What are you looking for?" data-instasearch="true" data-minlength="2" data-showthumbs="true" data-url="/instantsearch" data-origin="Search/Search" autoComplete="off" />

                <Button type="submit" variant="primary" className="btn-icon instasearch-button" title="Search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </Form>
        </div >
    )
}

export default SearchBar;