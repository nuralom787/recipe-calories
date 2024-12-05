import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import OurRecipes from './Components/OurRecipes/OurRecipes'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto space-y-10'>
        <Header></Header>
        <Banner></Banner>
        <OurRecipes></OurRecipes>
      </div>
    </>
  )
}

export default App
