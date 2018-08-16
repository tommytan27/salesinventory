import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Paper, Button, FontIcon } from 'react-md';
import SystemUserMenuPage from '../../containers/systemPages/SystemUserMenuPage';
import SystemShoppingPage from '../../containers/systemPages/SystemShoppingPage';
import pageOptions from '../../constants/pageOptions';
import styles from '../../constants/styles';

class UserPage extends React.Component {
    renderUserPage = () => (
        this.props.activePage === pageOptions.USER_MAIN_MENU ? <SystemUserMenuPage /> :
        this.props.activePage === pageOptions.USER_SHOPPING_PAGE ? <SystemShoppingPage /> : <div></div>
    );

    render() {
        return this.renderUserPage();
    }
}

UserPage.propTypes = {
    activePage: PropTypes.string.isRequired
};

export default UserPage;