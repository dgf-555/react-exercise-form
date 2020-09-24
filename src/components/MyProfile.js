import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      gender:'male',
      description:'',
      checked: false,
    };
    console.log('执行了constructor')
    this.handleChange = this.handleChange.bind(this); 
  }
  handleChange=(event)=>{
    console.log(11111);
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]:value,
    })
  }
  handlesubmit =(event)=>{
    event.preventDefault();
  }
  render() {
    return (
      <form className='from' onSubmit={this.handlesubmit}>
        <p className='myprofile'>My Profile</p>
        <span>Name</span>
        <br/>
        <input 
        className="nameform" 
        type='text'
        name ='name' 
        value={this.state.name} 
        onChange={this.handleChange}
        />     
        <br/>
        <span>Gender</span>
        <br/>
        <select 
        className="genderform" 
        value={this.state.gender} 
        name='gender' 
        onChange={this.handleChange}>
        <option value ="male">male</option>
        <option value ="female">female</option>
        </select>
        <br/>
        <span>Description</span>
        <br/>
        <textarea 
        className="textform" 
        value={this.state.description} 
        name='description' 
        onChange={this.handleChange}
        />
        <br/>
        <input 
        className="checkbox"
        type="checkbox" 
        value={this.state.checked} 
        name='checked' 
        onChange={this.handleChange}
        />
        <span id ='hint'>I have read the terms of conduct</span>
        <input 
        className="submit" 
        type="submit" 
        value="Submit"
        disabled= {
          this.state.name===""||
          this.state.description===""||
          this.state.checked===false
        }
        />
      </form>
    );
  }
}

export default MyProfile;


