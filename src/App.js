import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';
import { ListGroup, Button } from 'react-bootstrap'


function App() {
  const [names, setNames] = useState([
    { id: uuidv4(), name: "Sheldon" },
    { id: uuidv4(), name: "Leonard" },
    { id: uuidv4(), name: "Penny" },
    { id: uuidv4(), name: "Howard" },
    { id: uuidv4(), name: "Kootraphali" }
  ]);

  const newUser = name => ({ id: uuidv4(), name })
  const catchName = names[0].name

  const repeat = () =>{
    for (let i = 0; i <= 4; i++) {
      CatchNameFinal()
    }
    console.log(CatchNameFinal())
    }
    
  function CatchNameFinal() {
    const sendToLastName = catchName
    const namesArray = names
      const oldUsersWithoutFiltered = namesArray.filter((user) => user.name !== sendToLastName)
      for (let i = 0; i <= 4; i++) {
        setNames([
          ...oldUsersWithoutFiltered,
          newUser(sendToLastName),
          newUser(sendToLastName)
        ])
      }
      console.log([...oldUsersWithoutFiltered, sendToLastName, sendToLastName])
      return [...oldUsersWithoutFiltered, sendToLastName, sendToLastName]
    }



  return (
    <div className="App">
      <ListGroup>
        { names.map((user) => (
          <ListGroup.Item key={ user.id }>
            {user.name }
          </ListGroup.Item>
        )) }
      </ListGroup>
      <Button to="sendToLast" variant="success" name='sendToLast' onClick={()=> repeat() }>Send to Last</Button>
    </div>
  );
}

export default App;
