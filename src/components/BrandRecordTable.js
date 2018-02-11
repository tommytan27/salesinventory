import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, TableHeader, TableBody, TableColumn, TableRow, DialogContainer } from 'react-md';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import BrandRecord from './BrandRecord';
import styles from './../constants/styles';

class BrandRecordTable extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <h2>Brands</h2>

                <DataTable plain>
                    <TableHeader>
                        <TableRow>
                            <TableColumn>ID</TableColumn>
                            <TableColumn>Name</TableColumn>                        
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {this.props.brands.map((brand) => (
                            <BrandRecord key={brand.id} {...brand} onClick={() => this.props.onBrandRecordClick(brand)} />
                        ))}
                    </TableBody>
                </DataTable>
            </div>
        );
    }
}

BrandRecordTable.propTypes = {
    brands: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onBrandRecordClick: PropTypes.func.isRequired
};

export default BrandRecordTable;