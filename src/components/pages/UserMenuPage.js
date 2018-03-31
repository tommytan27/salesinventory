import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Paper, Button, FontIcon } from 'react-md';
import styles from '../../constants/styles';

class UserMenuPage extends React.Component {
    render() {
        return (
            <div style={styles.page.main}>
                <Image src="logo.png" style={styles.logo.main} />
                
                
                
                <Button flat primary iconChildren="people" swapTheming
                    style={styles.floatingButton.left}
                    onClick={this.props.onAdminButtonClick}>
                    ADMIN
                </Button>
            </div>
        );
    }
}

UserMenuPage.propTypes = {    
    
}

export default UserMenuPage;