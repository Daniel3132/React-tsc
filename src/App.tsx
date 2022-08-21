import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types'


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const initial_state = [
  {
    nick: "dapelu",
    subMonths: 9,
    avatar: 'xd',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam id officiis. Iste asperiores quaerat voluptates quis quas nam, tempore vel enim omnis",
  },
  {
    nick: "dapelu",
    subMonths: 8,
    avatar: 'xd',

  }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newsubs, setNewSubs] = useState<AppState["newSubsNumber"]>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(initial_state)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])

  }



  return (
    <div className="App" ref={divRef}>
      <h1>React with Typescript</h1>
      <ul>
        <List subs={subs} />
        <Form onNewSub={handleNewSub} />
      </ul>
    </div>
  );
}

export default App;
