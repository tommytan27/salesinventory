import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Paper, Button, FontIcon } from 'react-md';
import SystemUserMenuPage from '../../containers/systemPages/SystemUserMenuPage';
import pageOptions from '../../constants/pageOptions';
import styles from '../../constants/styles';

class UserPage extends React.Component {
    renderUserPage = () => (
        <SystemUserMenuPage />
        // this.props.activePage === pageOptions.ADMIN_MAIN_MENU ? <SystemAdminMenuPage /> : 
        // this.props.activePage === pageOptions.ADMIN_USER_RECORDS ? <SystemUserRecordTable /> :
        // this.props.activePage === pageOptions.ADMIN_CUSTOMER_RECORDS ? <SystemCustomerRecordTable /> :
        // this.props.activePage === pageOptions.ADMIN_PRODUCTS_PAGE ? <SystemSupplierBrandItemPage /> :
        // this.props.activePage === pageOptions.ADMIN_STOCKING_PAGE ? <SystemStockInventoryPage /> :
        // this.props.activePage === pageOptions.ADMIN_RECORDS_HISTORY ? <SystemSalesCreditStockPage /> : <div></div>
    );

    render() {
        return this.renderUserPage();
    }
}

UserPage.propTypes = {
    activePage: PropTypes.string.isRequired
};

export default UserPage;