import React from 'react';
import axios from 'axios';
import { useState} from 'react';

import './DELETE.css'
function DELETE() {
    const [patientid, setId] = useState();
    const [error, setError] = useState('');
  
    function del() {
        // useEffect(() => {
        axios
            .delete('http://localhost:8080/Delete/' + patientid)
            .then((response) => {
                console.log(response.data);
                
            })
            .catch((error) => setError(error.message));
        alert("User Deleted");
    }
    return (
        <div> <div className='delcont'> <center><br/><br/><div className='delbox'>
            <h2>Delete Details</h2>
            <div>

                <input type="number" placeholder='Enter User ID' className="form-control1" 
                value={patientid} onChange={(e) => setId(e.target.value)}/>
                
            </div>

            <button type="submit" className="bud" onClick
                ={del}>Submit</button></div>
                </center>
                
          
            <h2>{error}</h2>
            </div>
        </div>
    );
}

export default DELETE;