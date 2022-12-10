import axios from 'axios'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router';

  function Text(){
    const {name}=useParams()
    let navigate=useNavigate();
    
    const [text,setText] = useState(
        {savedtext:''}
        )
        const {savedtext}=text
        useEffect(()=>{
          axios.get(`https://write-1ad81-default-rtdb.firebaseio.com/${name}.json`).then(res=>{setText({...text,savedtext:res.data.savedtext});});  
      }, []) 
       
    

  const [url,setUrl] = useState(name)

  function submittext(){
    axios.put(`https://write-1ad81-default-rtdb.firebaseio.com/${url}.json`,text);
    alert('saved successfuully')
}

function back(){
  navigate('/')
}

return (
    <div style={{height:'100vh',backgroundColor:'antiquewhite'}} className="App">
      <center>
        <label>url:</label>
      <input value={url} style ={{marginTop:'20px',marginLeft:'10px',padding:'3px'}} type='text' placeholder='enter url' onChange={e=>setUrl(e.target.value)} ></input>
      <br></br>
      <textarea value={savedtext} style={{margin:'20px',height:'70vh',width:'90%'}} onChange={e=>{setText({savedtext:e.target.value})}} placeholder="enter text" height="90" width="90"></textarea>
      <br></br>
      <input type="button" style={{margin:'20px'}} onClick={submittext} value="SUBMIT"></input>
      <input type="button" style={{margin:'20px'}} onClick={back} value="Try other url"></input>

      </center>
    </div>
  );
}

export default Text;