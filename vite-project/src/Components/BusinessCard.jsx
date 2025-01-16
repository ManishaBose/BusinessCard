import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export function BusinessCard({people}){
    const [editMode, setEditMode] = useState("");
    //to update
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interests, setInterests] = useState([]);
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    //update end
    return <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={4}
    useFlexGap
    sx={{ justifyContent: "center", alignItems: "flex-start", padding: 2, flexWrap: "wrap"}}
  >
    {people.map((person)=>{
        return(
            <Stack key={person._id}>  
                <Card variant="outlined" sx={{
                    padding: 4,
                    margin: 2,
                    width: 300,
                    borderRadius: 2,
                    boxShadow: 3,
                  }}>
                {/* Check if card is in edit mode */}
                {
                    editMode == person._id ? (
                        <div>
                            <input type="text" defaultValue={person.name} onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                            <input type="text" defaultValue={person.description} onChange={(e)=>{
                                setDescription(e.target.value);
                            }}/>
                            <input type="text" defaultValue={person.interests} onChange={(e)=>{
                                const str = e.target.value;
                                const arr = str.split(", ")
                                setInterests(arr);;
                            }}/>
                            <input type="text" defaultValue={person.linkedin} onChange={(e)=>{
                                setLinkedin(e.target.value);
                            }}/>
                            <input type="text" defaultValue={person.twitter} onChange={(e)=>{
                                setTwitter(e.target.value);
                            }}/>
                        </div>
                    ):(
                        <div>
                            <h1>{person.name}</h1>
                            <p style={{
                                color: "#808080"
                            }}>{person.description}</p>
                            <h2>Interests</h2>
                            <Stack spacing={1} sx={{marginBottom: 2}}>
                            {
                                person.interests.map((interest)=>{
                                    return(
                                        <p style={{
                                            color: "#808080"
                                        }}>{interest}</p>
                                    )
                                })
                            }
                            </Stack>
                            <Button variant="contained" href={person.linkedin} sx={{margin: 1}}>Linkedin</Button>
                            <Button variant="contained" href={person.twitter}>Twitter</Button>
                        </div>
                    )
                }
                {/*end */}    
                </Card>
                {
                    editMode == person._id ?(
                        <div>
                            <Button onClick={()=>{
                                setEditMode("");
                            }}>Cancel</Button>
                            <Button onClick={()=>{
                                fetch("http://localhost:3000/",{
                                    method: "PUT",
                                    body: JSON.stringify({
                                      id: person._id,
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
                                    setEditMode("");
                                  })
                            }}>Okay</Button>
                        </div>
                    ): (
                        <div>
                            <Button variant="outlined" sx={{
                                padding: 1,
                                margin: 1,
                                borderRadius: 2,
                                boxShadow: 3,
                            }} onClick={()=>{
                                setEditMode(person._id)
                                setName(person.name);
                                setDescription(person.description);
                                setInterests(person.interests);
                                setLinkedin(person.linkedin);
                                setTwitter(person.twitter);
                            }}>Update</Button>
                            <Button variant="outlined" sx={{
                                padding: 1,
                                margin: 1,
                                borderRadius: 2,
                                boxShadow: 3,
                            }} onClick={()=>{
                                fetch("http://localhost:3000/",{
                                    method: "DELETE",
                                    body: JSON.stringify({ 
                                    id: person._id
                                    }), 
                                    headers: {
                                    "Content-type":"application/json"
                                    }
                                }).then(async function (res){
                                    const json = await res.json();
                                    alert("Person deleted");
                                })
                            }}>Delete</Button>
                        </div>
                    )
                }
                
            </Stack>)

    })
}
</Stack>
}