import React from 'react'
class Second extends React.Component {
    constructor(){
      super();
      this.state ={
        users: ['25','30','28','35','40','22','32','45','28','33'],
        input: '',
      }
    }
  
    onChangeHandler(e){
      this.setState({
        input: e.target.value,
      })
    }
  
    render (){
        const list = this.state.users
          .filter(d => this.state.input === '' || d.includes(this.state.input))
          .map((d, index) => <li key={index}>{d}</li>);
  
      return (<div>
        <input value={this.state.input} type="text" onChange={this.onChangeHandler.bind(this)}/>
          <ul>{list}</ul>
          <select>
                    <option value="New York">New York</option>
                    <option value="San Francisco" selected>Volvo</option>
                    <option value="Chicago">Fiat</option>
                </select>
        </div>)
    }
  }
  export default Second