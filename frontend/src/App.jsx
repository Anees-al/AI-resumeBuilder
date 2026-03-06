import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import Resume from './pages/Resume'
import Login from './pages/Login'
import Preview from './pages/Preview'
import {ToastContainer} from 'react-toastify'



const App = () => {
  return (
    <div >
      <ToastContainer/>
      <Routes>
<Route path='/'  element={<Home/>} />


<Route path='app'  element={<Layout/>}>
<Route   index   element={<Dashboard/>}/>
<Route  path='builder/:resumeid'   element={<Resume/>}/>
</Route>



<Route path='login'  element={<Login/>}/>
<Route path='view/:resumeid'  element={<Preview/>}/>
      </Routes>
    </div>
  )
}

export default App
