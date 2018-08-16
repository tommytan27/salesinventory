import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Button, Paper, FontIcon } from 'react-md';
import styles from '../../constants/styles';
import SystemLoginDialog from '../../containers/systemDialogs/SystemLoginDialog';
import SystemPriceCheckDialog from './../../containers/systemDialogs/SystemPriceCheckDialog';

class UserMenuPage extends React.Component {
    render() {
        return (
            <div style={styles.page.main}>
                <Image src="logo.png" style={styles.logo.main} />
                
                <Paper key="UserMainPagePaper" zDepth={5} style={styles.paper.main}
                    onClick={() => this.props.onShoppingButtonClick()}>
                    <p style={styles.paper.mainTextLarge}>Welcome</p><br />
                    <p style={styles.paper.mainText}>Click here to start shopping</p>
                    <FontIcon style={styles.fontIcon.rightArrow}>keyboard_arrow_right</FontIcon>
                </Paper>
                
                <Button flat primary iconChildren="people" swapTheming
                    style={styles.floatingButton.leftMainPage}
                    onClick={this.props.onAdminButtonClick}>
                    ADMIN
                </Button>
                
                <Button flat primary iconChildren="search" swapTheming
                    style={styles.floatingButton.rightMainPage}
                    onClick={this.props.onPriceCheckButtonClick}>
                    PRICE CHECK
                </Button>

                <SystemLoginDialog />
                <SystemPriceCheckDialog />
            </div>
        );
    }
}

UserMenuPage.propTypes = {    
    onAdminButtonClick: PropTypes.func.isRequired,
    onShoppingButtonClick: PropTypes.func.isRequired,
    onPriceCheckButtonClick: PropTypes.func.isRequired
}

export default UserMenuPage;