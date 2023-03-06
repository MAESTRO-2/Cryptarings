import NavBar from './componant/NavBar'
import HomePage from './componant/HomePage'
import Cryptocurrencies from './componant/Cryptocurrencies'
import News from './componant/News'
import CryptoDetails from './componant/CryptoDetails'
import { Route , Routes  } from 'react-router-dom'

const App = () => {
  return (
    <div style={{fontWeight: 'bold'}}>
       <NavBar />
       <Routes >
         <Route  path='/' element={<HomePage />}/>
         <Route path='/home' element={<HomePage />}/>
         <Route path='/Cryptocurrencies' element={<Cryptocurrencies />}/>
         <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
         <Route path='/news' element={<News />}/>
      </Routes>   

    </div>
  )
}

export default App




/*        <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>*/ 



          /*  <Routes>
         <Route path='/' element={<HomePage />}/>
         <Route path='/home' element={<HomePage />}/>
         <Route path='/exchanges' element={<Exchanges />}/>
         <Route path='/Cryptocurrencies' element={<Cryptocurrencies />}/>
         <Route path="/crypto" element={<CryptoDetails />}></Route>
         <Route path='/news' element={<News />}/>
      </Routes> */