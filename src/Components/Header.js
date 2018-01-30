import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => {
    return(
        <Jumbotron>
            <h1> Welcome Home!</h1>
            <p>
                Some text here
            </p>
            <p>
                <Button bsStyle="primary" className="JumbotronButton">Learn more</Button>
            </p>                    
        </Jumbotron>
    )
}

export default Header;