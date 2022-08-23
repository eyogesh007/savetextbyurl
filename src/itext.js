import axios from 'axios'
import {useState} from 'react'
import {useNavigate} from 'react-router';

function Itext(){
    let navigate=useNavigate();
    let taget=1;
    const [a,setA]=useState(true);
    const [text,setText] = useState(
        {savedtext:""}
    )
    let {savedtext}=text
  const [url,setUrl] = useState("")
  async function submittext(){
    await axios.get(`https://write-1ad81-default-rtdb.firebaseio.com/urls.json`)
    .then(
         res=>
        {
           for(let i in res.data)
            {
                if(url===res.data[i].urls){
                    taget=0;
                    setA(false);
                return; 
            }
            }})
        if(taget===1){
            axios.post(`https://write-1ad81-default-rtdb.firebaseio.com/urls.json`,{'urls':url}).then(console.log('posted'))
    axios.put(`https://write-1ad81-default-rtdb.firebaseio.com/${url}.json`,text);
    alert('saved successfuully')
        }    
}

function subtext(e){
    setText({...text,savedtext:e.target.value})
}

function gettext(){
    navigate(`/${url}`);
  }

return (
    <div style={{height:'110vh' ,backgroundColor:'antiquewhite'}} className="App">
        <center>
        <label>url:</label>
      <input value={url} style ={{marginTop:'20px',marginLeft:'10px',padding:'3px'}} onChange={e=>setUrl(e.target.value)} type='text' placeholder='enter url'></input>
      {a?<p></p>:<p style={{color:"red" ,height:'1px'}}>link not available</p>}
      <br></br>
      <textarea value={savedtext}  onChange={subtext} style={{padding:'15px 10px',
     height:'70vh' ,width:'90%'}} placeholder="enter text" ></textarea>
      <br></br>
      <input type="button" style={{margin:'20px'}} onClick={submittext} value="SUBMIT"></input>
      <input type="button" style={{margin:'20px'}} onClick={gettext} value="GET"></input>
      </center>
    </div>
  );
}

export default Itext;