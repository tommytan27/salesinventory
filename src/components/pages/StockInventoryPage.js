import React from 'react';
import { Image, Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Paper, Button, FontIcon, Divider } from 'react-md';
import Select from 'react-select';
import SystemStockInventoryForm from '../../containers/systemForms/SystemStockInventoryForm';
import SystemStockingRecordsList from '../../containers/systemLists/SystemStockingRecordsList';
import styles from '../../constants/styles';

class StockInventoryPage extends React.Component {
    render() {
        return (
            <div style={styles.mainPage}>
                <SystemStockInventoryForm />
                <SystemStockingRecordsList />
            </div>
        );
    }
}

export default StockInventoryPage;