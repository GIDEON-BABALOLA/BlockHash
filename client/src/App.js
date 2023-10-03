import React, {useState} from "react"
import axios from "axios"
import Button from '@mui/material/Button';
function App() {
  const [formData, setFormData] = useState({
    version: '',
    hashPrevBlock: '',
    hashMerkleRoot: '',
    Time: '',
    Bits: '',
    Nonce: '',
  });
  const [blockHash, setBlockHash] = useState('');

 const fetchData = () =>{
  axios.post("/api/data", formData)
  .then((response)=>{
    setBlockHash(response.data.blockHash)
  })
  .catch((error)=>{
    console.error("Error : " +error)
  })
 } 
  const handleSubmit = (e) => {
    e.preventDefault();
 fetchData();
  };
  function mark(event){
    setFormData((prevValue)=>{
      const {name, value} = event.target
      console.log(formData)
      return{
        ...prevValue,
        [name]:value
    }
    })
  }
  return  <div class="flex justify-center items-center h-screen marker">
  <form method="post" action="/">
    <h1 class="title man"><i class="fa-brands fa-bitcoin marner"></i></h1>
    <h1 class="title">
      Bitcoin Block Hash Calculator</h1>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Version
          </label>
          <input name="version" value={formData.version} onChange={mark}
           class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder= 
           "0x20000000" />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            hashPrevBlock
          </label>
          <input name="hashPrevBlock" value={formData.hashPrevBlock} onChange={mark}
           class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="******************" />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            hashMerkleRoot
          </label>
          <input name="hashMerkleRoot" value={formData.hashMerkleRoot} onChange={mark}
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="name" placeholder="******************" />
          <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
            Time
          </label>
          <input  name="Time" value={formData.Time} onChange={mark}
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="UTC" />
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Bits
          </label>
          <div class="relative">
            <input  name = "Bits" value={formData.Bits} onChange={mark}
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="
            386,198,911" />
          </div>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
            Nonce
          </label>
          <input  onChange={mark}
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          name = "Nonce"id="grid-zip" type="text" placeholder="
          2,876,584,592"  value={formData.Nonce}/>
        </div>
      </div>
      <Button variant="contained"  onClick={handleSubmit}>
  Submit
</Button>
<p className="back">
 {blockHash} 

</p>
  </form>
  </div>
}
//remove git repo rm -rf .git

export default App;
