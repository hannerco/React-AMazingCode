import './App.css'
import Friends from './components/Friends'

const primerCirculo = [
  {
    id: 1,
    name: 'Lourdes Valentina Levette Ipuana',
    age: 23,
    nickName: 'Levi',
  },

  {
    id: 2,
    name: 'Lauren Daniela Cruz Ladino',
    age: 20,
    nickName: 'Nela',
  }
]

const HTMLFriends = primerCirculo.map((friend) => {
  return ( 
    <Friends profile={friend} />
  )
})

function App() {

  return (
    <>

      <h1>Renderizado de listas</h1>

      {HTMLFriends}
      

      
    </>
  )
}

export default App
