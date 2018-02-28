import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, DialogContainer, DatePicker } from 'react-md';
import { Form, FormGroup, ControlLabel } from 'react-bootstrap';
import Select from 'react-select';
import tabOptions from '../../constants/tabOptions';
import dialogModes from '../../constants/dialogModes';
import styles from './../../constants/styles';

class SearchDialog extends React.Component {
    getCustomerOptions = () => {
        let customers = this.props.customers.map((customer) => {
            return {
                value: customer.id,
                label: customer.firstName + " " + customer.lastName
            }
        });
        customers.unshift({
            value: -1,
            label: "Anyone"
        });
        return customers;
    }

    renderCustomerCombo = () => {
        if (this.props.activeTab === tabOptions.SALES_RECORD ||
            this.props.activeTab === tabOptions.CREDIT_RECORD) {
                return (
                    <FormGroup>
                        <ControlLabel>Customer:</ControlLabel>
                        <Select name="CustomerSelect" value={this.props.searchDialogs.customerId}
                                onChange={(e) => {if (e) this.props.onCustomerComboChanged(e.value)}}
                                options={this.getCustomerOptions()} />
                    </FormGroup>
                );
            }
        return (<div></div>);
    }

    render() {         
        let actions = [
            <Button flat iconChildren="clear" onClick={this.props.onDialogClose} id="cancelButton">CANCEL</Button>,
            <Button primary flat iconChildren="search" onClick={this.props.onSearchButtonClick}>ADD</Button>
        ];
        
        return (
            <DialogContainer id="SearchDialog" title="Search"
                visible={this.props.searchDialogs.open} dialogStyle={{width: styles.dialog}}
                actions={actions} modal={false} initialFocus="#cancelButton"
                onHide={this.props.onDialogClose}>
                {this.renderCustomerCombo()}
                <FormGroup>
                    <ControlLabel>From:</ControlLabel>
                    <DatePicker id="FromDate" disableOuterDates portal={true} lastChild={true}
                        locales="en-ZA"
                        disableScrollLocking={true} renderNode={document.body}
                        value={this.props.searchDialogs.fromDate}
                        fullWidth={false} onChange={ (value) => {this.props.onFromDateFieldChanged(value)} }/>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>To:</ControlLabel>
                    <DatePicker id="ToDate" disableOuterDates portal={true} lastChild={true}
                        locales="en-ZA"
                        disableScrollLocking={true} renderNode={document.body}
                        value={this.props.searchDialogs.toDate}
                        minDate={new Date(this.props.searchDialogs.fromDate)}
                        fullWidth={false} onChange={ (value) => {this.props.onToDateFieldChanged(value)} }/>
                </FormGroup>
            </DialogContainer>
        );
    }
}

SearchDialog.propTypes = {
    activeTab: PropTypes.string.isRequired,
    searchDialogs: PropTypes.shape({
        open: PropTypes.bool.isRequired,
        fromDate: PropTypes.string,
        toDate: PropTypes.string,
        customerId: PropTypes.number
    }).isRequired,
    onDialogClose: PropTypes.func.isRequired,
    customers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            credit: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onCustomerComboChanged: PropTypes.func.isRequired,
    onFromDateFieldChanged: PropTypes.func.isRequired,
    onToDateFieldChanged: PropTypes.func.isRequired
    // onSearchButtonClick: PropTypes.func.isRequired
}

export default SearchDialog;
