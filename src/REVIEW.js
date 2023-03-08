import "./REVIEW.css"
import React, { Component } from 'react'
import axios from 'axios';
export class REVIEW extends Component {
    constructor(props){
        super(props);
            this.state={
                patientid:'',
                patientname:'',
                phno:'',
                city:''
            }
        }
    
    handleIdChange = (event) => {
        this.setState({ patientid: event.target.value });
      };
    
      handleNameChange = (event) => {
        this.setState({ patientname: event.target.value });
      };
    
      handlePhoneChange = (event) => {
        this.setState({ phno: event.target.value });
      };
    
      handleCityChange = (event) => {
        this.setState({ city: event.target.value });
      };
    
      handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            patientid: this.state.patientid,
            patientname: this.state.patientname,
            phno: this.state.phno,
            city: this.state.city,
            
          };
        
          axios.post('http://127.0.0.1:8080/post', data)
      };
    render(){  
    return ( 
        <div>
        <div className='revcont'>
        <div className='revbox' ><center>
        <form onSubmit={this.handleSubmit} className="sign-form">
            <h1><center>Patient Details</center></h1>      
            <div className='revrow'>
                <label style={{height :"10px",width:"280px",marginTop:"15px",marginLeft:"100px"}}>Patient Id : </label>
                <br></br>
                <input type="text" id='Patient Id'value={this.state.patientid} onChange={this.handleIdChange} placeholder=' Enter patient id'style={{height :"30px",width:"280px",marginTop:"15px",marginLeft:"100px",borderRadius:"10px"}}/>
            </div><br></br>
           <div className='revrow'>
                <label style={{height :"10px",width:"280px",marginTop:"15px",marginLeft:"100px"}}>Patient Name : </label>
                <br></br>
                <input type="text" id='Patient Name'value={this.state.patientname} onChange={this.handleNameChange} placeholder='Enter patient Name'style={{height :"30px",width:"280px",marginTop:"15px",marginLeft:"100px",borderRadius:"10px"}}/>
            </div><br></br>
            <div className='revrow' >
                <label style={{height :"10px",width:"280px",marginTop:"15px",marginLeft:"100px"}}>Patient contact: </label>
                <br></br>
                <input type="text" id='address'value={this.state.phno} onChange={this.handlePhoneChange} placeholder='Enter phone number'style={{height :"30px",width:"280px",marginTop:"15px",marginLeft:"100px",borderRadius:"10px"}}/>
            </div><br></br>
            <div className='revrow' >
                <label style={{height :"10px",width:"280px",marginTop:"15px",marginLeft:"100px"}}>Patient address: </label>
                <br></br>
                <input type="text" id='number'value={this.state.city} onChange={this.handleCityChange} placeholder='Enter address'style={{height :"30px",width:"280px",marginTop:"15px",marginLeft:"100px",borderRadius:"10px"}}/>
            </div><br></br><br></br>
            <div >
                <button className='revsubmit' type='submit'
                style={{height :"30px",width:"120px"
                ,marginTop:"15px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Submit</button>
            </div>
        </form></center>
        </div>
        </div>
        </div>
        
    );
    
    }
}
   
export default REVIEW;