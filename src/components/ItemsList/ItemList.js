import React from 'react'
import styled from 'styled-components'
import WeatherItem from '../WeatherItem/WeatherItem'
const TableDark = styled.button`
    color: #fff;
  background-color: #343a40;
  `
function ItemList() {
    return (
        <div>
            <TableDark>
                <tbody><tr>
                    <th>Data</th>
                    <th>Format</th>
                    <th>File added</th>
                    <th>Data preview</th>
                </tr>
                </tbody><tbody>
                    <tr>
                        <td>
                        <WeatherItem city={'braemar'}></WeatherItem>    
                        </td>
                        <td>TXT
                        </td>
                        <td>
                            24 February 2011
                        </td>
                        <td>
                            <span>Yes</span>
                        </td>
                    </tr>
                </tbody>
                </TableDark>
        </div>
    )
}

export default ItemList
