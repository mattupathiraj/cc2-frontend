
import "./Main.css";
import { Link } from 'react-router-dom';
import React, { Component } from 'react'
export class Main extends Component {
    render() {
    return ( 
        <><div className='Mainbody'>
        <div className='boxmain' ><center>
        <form>
            <h1>SWEET HOME HOSPITAL</h1>   
                  
        
            <div className='box2'>
            <div >
            <a><Link to="/REVIEW"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Add details</button></Link></a>
            </div></div>
            <div className='box1'>
            <div >
            <a><Link to="/UPDATE">
                <button className='submit' 
                style={{height :"50px",fontSize:"20px",width:"200px"
                ,marginTop:"15px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Update details</button></Link></a>
            </div></div>

            <div className='box2'>
            <div >
            <a><Link to="/DELETE"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Delete details</button></Link></a>
            </div></div>
            <div className='box2'>
            <div >
            <a><Link to="/DISPLAY"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Display details</button></Link></a>
            </div></div>
            
        </form></center>
        </div></div>
        </>
    );
}
}
export default Main