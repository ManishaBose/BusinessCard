import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export function InputDetails() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [interests, setInterests] = useState([]);
  const [interestInput, setInterestInput] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  return (
    <Box sx={{
      margin: "auto",
      width: "50%",
      padding: "10px"
    }}> 
      <TextField fullWidth label="Name" id="name" margin="dense" value={name} onChange={(e)=>{
        setName(e.target.value);
      }}/>
      <TextField fullWidth label="Description" id="description" margin="dense" value={description} onChange={(e)=>{
        setDescription(e.target.value);
      }}/>
      <TextField fullWidth label="Interests" id="interests" margin="dense" value={interestInput} onChange={(e)=>{
        setInterestInput(e.target.value);
        const str = e.target.value;
        const arr = str.split(", ")
        setInterests(arr);
      }}/>
      <TextField fullWidth label="Linkedin URL" id="linkedin" margin="dense" value={linkedin} onChange={(e)=>{
        setLinkedin(e.target.value);
      }}/>
      <TextField fullWidth label="Twitter URL" id="twitter" margin="dense" value={twitter} onChange={(e)=>{
        setTwitter(e.target.value);
      }}/>
      <Button variant="contained" onClick={() => {
              fetch("http://localhost:3000/",{
                method: "POST",
                body: JSON.stringify({
                  name,
                  description,
                  interests,
                  linkedin,
                  twitter
                }), 
                headers: {
                  "Content-type":"application/json"
                }
              }).then(async function (res){
                const json = await res.json();
                alert("Person added");
                setName("");
                setDescription("");
                setInterestInput("");
                setLinkedin("");
                setTwitter("");
              })
            }}>Submit</Button>
    </Box>
  );
}