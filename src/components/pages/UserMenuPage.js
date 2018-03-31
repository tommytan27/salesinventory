import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import DialogContainer, { Button } from 'react-md';
import styles from '../../constants/styles';
import SystemLoginDialog from '../../containers/systemDialogs/SystemLoginDialog';

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

                <SystemLoginDialog />
            </div>
        );
    }
}

UserMenuPage.propTypes = {    
    
}

export default UserMenuPage;