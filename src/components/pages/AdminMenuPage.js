import React from 'react';
import { PropTypes } from 'prop-types';
import { Image } from 'react-bootstrap';
import { Paper, Button, FontIcon } from 'react-md';
import styles from '../../constants/styles';

class AdminPage extends React.Component {
    render() {
        return (
            <div style={styles.page.main}>
                <Image src="logo.png" style={styles.logo.main} />
                
                <div style={styles.adminButtonRow1}>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"User Records"} onClick={this.props.onUserRecordsButtonClick}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>person</FontIcon>
                    </button>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"Customer Records"} onClick={this.props.onCustomerRecordsButtonClick}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>face</FontIcon>
                    </button>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"Open Drawer"}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>file_download</FontIcon>
                    </button>
                </div>

                <div style={styles.adminButtonRow2}>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"Product Details"} onClick={this.props.onProductsDetailsButtonClick}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>dashboard</FontIcon>
                    </button>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"Stocking"} onClick={this.props.onStockingButtonClick}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>archive</FontIcon>
                    </button>
                    <button type="button" style={styles.iconButton.adminMenuButton} className="AdminButton"
                        title={"Records History"} onClick={this.props.onRecordsHistoryButtonClick}>
                        <FontIcon primary style={styles.fontIcon.adminMenuButton}>receipt</FontIcon>
                    </button>
                </div>
                
                <Button flat primary iconChildren="keyboard_arrow_left" swapTheming
                    style={styles.floatingButton.left}>
                    LOGOUT
                </Button>
            </div>
        );
    }
}

AdminPage.propTypes = {    
    onUserRecordsButtonClick: PropTypes.func.isRequired,
    onCustomerRecordsButtonClick: PropTypes.func.isRequired,
    onProductsDetailsButtonClick: PropTypes.func.isRequired,
    onStockingButtonClick: PropTypes.func.isRequired,
    onRecordsHistoryButtonClick: PropTypes.func.isRequired
}

export default AdminPage;