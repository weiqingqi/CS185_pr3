import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
            <h2>Movie Box Office</h2>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Lifetime Gross</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <td><a href= "https://www.boxofficemojo.com/title/tt4154796/?ref_=bo_cso_table_1">Avengers: Endgame</a></td>
                                        <td>$2,797,800,564</td>
                    <td>2019</td>
                </tr>
                <tr>
                    <td><a href= "https://www.boxofficemojo.com/title/tt0499549/?ref_=bo_cso_table_2">Avatar</a></td>
                    <td>$2,790,439,092</td>
                    <td>2009</td>
                </tr>
                <tr>
                    <td><a href= "https://www.boxofficemojo.com/title/tt0120338/?ref_=bo_cso_table_3">Titanic</a></td>
                    <td>$2,471,751,922</td>
                    <td>1997</td>
                </tr>
            </table>
            </div>
        )
    }
}

export default Table; 