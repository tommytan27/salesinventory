import React from 'react';
import { Image, Form, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import { Paper, Button, FontIcon, Divider } from 'react-md';
import Select from 'react-select';
import SystemShoppingForm from '../../containers/systemForms/SystemShoppingForm';
import SystemShoppingRecordsList from '../../containers/systemLists/SystemShoppingRecordsList';
import styles from '../../constants/styles';

class ShoppingPage extends React.Component {
    render() {
        return (
            <div style={styles.mainPage}>
                <SystemShoppingForm />
                <SystemShoppingRecordsList />
            </div>
        );
    }
}

export default ShoppingPage;