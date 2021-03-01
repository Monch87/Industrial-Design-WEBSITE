import './App.css'
import Routes from './routes/Routes'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'



function App() {

    return (
      <>
        <Navigation />
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    )
}

export default App;
