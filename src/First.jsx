import React from 'react'
class First extends React.Component {
    constructor(){
      super();
      this.state ={
        users: ['John Doe','Jane Smith','Bob Johnson','Alice Brown','Charlie Wilson','Eva Davis','Eva Davis','Ivy Adams'],
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
          
        </div>)
    }
  }
  export default First