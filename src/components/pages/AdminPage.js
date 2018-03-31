import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Paper, Button, FontIcon } from 'react-md';
import SystemAdminMenuPage from '../../containers/systemPages/SystemAdminMenuPage';
import SystemUserRecordTable from '../../containers/systemRecordTables/SystemUserRecordTable';
import SystemCustomerRecordTable from '../../containers/systemRecordTables/SystemCustomerRecordTable';
import SystemSupplierBrandItemPage from '../../containers/systemPages/SystemSupplierBrandItemPage';
import SystemStockInventoryPage from '../../containers/systemPages/SystemStockInventoryPage';
import SystemSalesCreditStockPage from '../../containers/systemPages/SystemSalesCreditStockPage';
import pageOptions from '../../constants/pageOptions';
import styles from '../../constants/styles';

class AdminPage extends React.Component {
    renderAdminPage = () => (
        this.props.activePage === pageOptions.ADMIN_MAIN_MENU ? <SystemAdminMenuPage /> : 
        this.props.activePage === pageOptions.ADMIN_USER_RECORDS ? <SystemUserRecordTable /> :
        this.props.activePage === pageOptions.ADMIN_CUSTOMER_RECORDS ? <SystemCustomerRecordTable /> :
        this.props.activePage === pageOptions.ADMIN_PRODUCTS_PAGE ? <SystemSupplierBrandItemPage /> :
        this.props.activePage === pageOptions.ADMIN_STOCKING_PAGE ? <SystemStockInventoryPage /> :
        this.props.activePage === pageOptions.ADMIN_RECORDS_HISTORY ? <SystemSalesCreditStockPage /> : <div></div>
    );

    render() {
        return this.renderAdminPage();
    }
}

export default AdminPage;