import axios from 'axios'
import {useState} from 'react'

function Itext(){
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

return (
    <div className="App">
        <label>url:</label>
      <input value={url} style ={{marginTop:'20px'}} onChange={e=>setUrl(e.target.value)} type='text' placeholder='enter url'></input>
      <br></br>
      {a?<p></p>:<p style={{color:"red"}}>link not available</p>}
      <textarea value={savedtext} style={{margin:'20px'}} onChange={subtext} placeholder="enter text" rows="15" cols="90"></textarea>
      <br></br>
      <input type="button" style={{margin:'20px'}} onClick={submittext} value="SUBMIT"></input>
    </div>
  );
}

export default Itext;