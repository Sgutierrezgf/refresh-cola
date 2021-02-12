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
    for (let index = 0; index <= 4; index++) {
      CatchNameFinal()
      console.log(CatchNameFinal)
    }
    }
    
  const CatchNameFinal = () => {
    const sendToLastName = catchName
      const oldUsersWithoutFiltered = names.filter((user) => user.name !== sendToLastName)
      setNames([
        ...oldUsersWithoutFiltered,
        newUser(sendToLastName),
        newUser(sendToLastName)
      ])
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
