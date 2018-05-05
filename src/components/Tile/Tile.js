import React from 'react';
import { Well, Table } from 'react-bootstrap';
import './Tile.css';

export default function Tile() {
    return (
        <Well bsSize="large">
            <Table responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Pic</th>
                    <th>User_id</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Name</td>
                    <td>ID</td>
                    <td>IMG</td>
                    <td>User_id</td>
                    </tr>
                </tbody>
            </Table>
        </Well>
    )
}