import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstchild from './components/Firstchild'
import Secondchild from './components/Secondchild'
import Thirdchild from './components/Thirdchild'
import Fourthchild from './components/Fourthchild'
import Fifthchild from './components/Fifthchild'
import Usestate_hook from './hooks/Usestate_hook'
import Day from './hooks/Day'
import Increment_decrement from './hooks/Increment_decrement'
import Usestate_string from './hooks/Usestate_string'
import Usestate_example from './components/Usestate_example'
import UseEffect_Example from './components/UseEffect_Example'
import Usestate_Example2 from './components/Usestate_Example2'
import Ternary_operator from './components/Ternary_operator'
import FormEvents from './components/FormEvents'
import Displaydata from './components/Displaydata'
import Userdata from './components/Userdata'
import Comments from './components/Comments'
import Albums from './components/Albums'
import Photos from './components/Photos'
import Todos from './components/Todos'
function App() {

  const name = "Harshitha"
  const place = "Bengalore"

   const details = {
    name:"Rajesh",
    place:"Bangalore",
    role:"Lead Software Engineer"
  }


  return (
    <div>
     {/* <Firstchild name = {name} />
      <Secondchild city = {place}/>
      <Thirdchild employee = {details}/>
      <Fourthchild employee = {details}/>
      <Fifthchild/>*/}
      {/*<Usestate_hook/>*/}
      {/*<Day/>*/}
      {/*<Increment_decrement/>*/}
      {/*<Usestate_string />*/}
      {/*<Usestate_example/>*/}
      {/*<UseEffect_Example/>*/}
      {/*<Usestate_Example2/>*/}
      {/*<Ternary_operator/>*/}
      {/*<FormEvents/>*/}
      {/*<Displaydata/>*/}
      {/*<Userdata/>*/}
      {/*} <Comments/>*/}
      {/*<Albums/>*/}
      {/*<Photos/>*/}
      <Todos/>
   </div>
  
  )
}

export default App
