import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal, useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {state, dispatch} = useContextGlobal()

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.data.map((dentist)=>
        {
          return(<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}></Card>)
        })}

      </div>
    </main>
  )
}

export default Home