const express = require("express")
const crypto = require('crypto');
const cors = require('cors'); // Import the cors package
const app = express()
app.use(cors());
app.use(express.urlencoded({extended : false}));
app.use(express.json());
  // Concatenate all the block header data
  
app.get("/api/data", (req, res)=>{
  res.status(404).json({success : true, data : ["Hi"]})
})
app.post("/api/data", (req, res)=>{
    const { version, hashPrevBlock, hashMerkleRoot, Time, Bits, Nonce} = req.body;
    console.log(version)
    function calculateBlockHash(version, hashPrevBlock, hashMerkleRoot, Time, Bits, nonce) {
        // Concatenate all the block header data
        const blockHeader = Buffer.concat([
          Buffer.from(version, 'hex').reverse(),
          Buffer.from(hashPrevBlock, 'hex').reverse(),
          Buffer.from(hashMerkleRoot, 'hex').reverse(),
          Buffer.from(Time, 'hex').reverse(),
          Buffer.from(Bits, 'hex').reverse(),
          Buffer.from(nonce, 'hex').reverse(),
        ]);
      
        // Double SHA-256 hashing
        const firstHash = crypto.createHash('sha256').update(blockHeader).digest();
        const secondHash = crypto.createHash('sha256').update(firstHash).digest();
      
        // Reverse the final hash to get the correct endianness
        const blockHash = Buffer.from(secondHash).reverse().toString('hex');  
        // raemon ui
        return blockHash;
      }
      const blockHash = calculateBlockHash(version, hashPrevBlock, hashMerkleRoot, Time, Bits, Nonce);
      console.log(blockHash)
      res.json({ blockHash });
      

})
app.all("*", (req, res)=>{
  res.status(404).json({success : false, data : []})
})
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});
app.listen(5000 || process.env.PORT, ()=>{
    console.log("server is running on port 5000")
})