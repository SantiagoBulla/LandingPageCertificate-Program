import Header from './components/Header'
import Banner from './components/Banner'
import FormContainer from './components/FormContainer'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <div className='main-container'>
        <FormContainer />
        <Banner />
      </div>
      <Footer />
    </>
  )
}

export default App
