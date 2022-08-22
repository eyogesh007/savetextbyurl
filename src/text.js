import axios from 'axios'
import {useState} from 'react'
import { useParams } from 'react-router-dom';

  function Text(){
    const {name}=useParams()
    
    const [text,setText] = useState(
        {savedtext:''}
        )
        const {savedtext}=text
        if(savedtext==='')
        axios.get(`https://write-1ad81-default-rtdb.firebaseio.com/${name}.json`).then(res=>{setText({...text,savedtext:res.data.savedtext});});  
    

  const [url,setUrl] = useState(name)

  function submittext(){
    axios.put(`https://write-1ad81-default-rtdb.firebaseio.com/${url}.json`,text);
}

return (
    <div className="App">
        <label>url:</label>
      <input value={url} style ={{marginTop:'20px'}} onChange={e=>setUrl(e.target.value)} type='text' placeholder='enter url'></input>
      <br></br>
      <textarea value={savedtext} style={{margin:'20px'}} onChange={e=>{setText({...text,savedtext:e.target.value})}} placeholder="enter text" rows="15" cols="90"></textarea>
      <br></br>
      <input type="button" style={{margin:'20px'}} onClick={submittext} value="SUBMIT"></input>
    </div>
  );
}

export default Text;