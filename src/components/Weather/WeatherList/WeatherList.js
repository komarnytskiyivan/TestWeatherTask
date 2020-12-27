import React from 'react'
import styled from 'styled-components'
import WeatherItem from './WeatherItem/WeatherItem'
const TableDark = styled.table`
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
                    <WeatherItem city={'braemar'} format={'TXT'} date={'24 February 2011'} preview={'Yes'} />
                    <WeatherItem city={'armagh'} format={'TXT'} date={'24 February 2011'} preview={'Yes'} />
                    <WeatherItem city={'ballypatrick'} format={'TXT'} date={'24 February 2011'} preview={'Yes'} />
                </tbody>
            </TableDark>
        </div>
    )
}

export default ItemList
