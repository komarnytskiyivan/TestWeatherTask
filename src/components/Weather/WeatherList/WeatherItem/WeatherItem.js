import React, { useState } from 'react'
import styled from 'styled-components'
const ButtonPaginator = styled.button`
padding: 12px;
background-color: #1e2edb;
border: none;
border-radius: 4px;
color: #fff;
margin-bottom: 40px;
outline: none;
box-shadow: 0px 0px 30px rgba(256,256,256,.1);
cursor: pointer;
  `
function WeatherItem(props) {
    const [currentRows, setCurrentRows] = useState({
        rows: [],
        currentRows: 0,
        show:false
    });
      const fetchData = async (needRows = 0) => { // Fetch data from txt file
        try {
          const response = await fetch(
            `https://www.metoffice.gov.uk/pub/data/weather/uk/climate/stationdata/${props.city}data.txt`
          );
          const data = await response.text();
          let rowsText = data.split('\n');
          needRows < 0 ? rowsText.length = 0 : rowsText.length = needRows;
          setCurrentRows({
              rows: rowsText,
              currentRows: rowsText.length,
              show: rowsText.length == 0 ? false : true
            })
        } catch (error) {
          console.log(error.message);
        }
      };
    function AddRows(){
        fetchData(currentRows.currentRows + 10);
    }
    function DeleteRows(){
        fetchData(currentRows.currentRows - 10);
    }
    return (
      <tr>
        <td>
          {currentRows.show ?
            currentRows.rows.map((datumn, index) => {
              return (
                <p key={index} >{datumn}</p>
              );
            }) : <div>{props.city.charAt(0).toUpperCase() + props.city.slice(1)}</div>}
          <ButtonPaginator onClick={() => AddRows()}>Show more!</ButtonPaginator>
          <ButtonPaginator onClick={() => DeleteRows()}>Show less!</ButtonPaginator>
        </td>
        <td>{props.format}
        </td>
        <td>
          {props.date}
        </td>
        <td>
          <span>{props.preview}</span>
        </td>
      </tr>
    )
}

export default WeatherItem
