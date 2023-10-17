import React from 'react'
class Third extends React.Component {
    constructor(){
      super();
      this.state ={
        users: ['New York','San Francisco','Chicago','Los Angeles','Houston','Miami','Seattle','Boston','Denver','Atlanta'],
      }
    }
    
    render (){
       
      return (<div>
        <select>
  <option value="New York">New York</option>
  <option value="San Francisco" selected>San Francisco</option>
  <option value="Chicago">Chicago</option>
  <option value="Los Angeles">Los Angeles</option>
  <option value="Houston">Houston</option>
  <option value="Miami">Miami</option>
  <option value="Seattle">Seattle</option>
  <option value="Boston">Boston</option>
  <option value="Denver">Denver</option>
  <option value="Atlanta">Atlanta</option>


</select>
          
        </div>)
    }
  }
  export default Third