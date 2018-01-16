import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import ImageNavigateBefore from 'material-ui/svg-icons/image/navigate-before';
import Table from 'react-bootstrap/lib/Table';
import styles from '../constants/styles';

class UserRecords extends React.Component {
    render() {
        return (
            <div style={styles.page}>
                <h2>Users</h2>
                <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Timeout</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.timeout}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
                
                <FloatingActionButton style={styles.floatingButton.left}>
                    <ImageNavigateBefore />
                </FloatingActionButton>
                <FloatingActionButton style={styles.floatingButton.right}>
                    <SocialPersonAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default UserRecords;