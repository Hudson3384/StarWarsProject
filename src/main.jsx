import React from 'react'
import ReactDOM from 'react-dom/client'
import { PeopleProvider } from './Context/PeopleContext'
import './index.css'

import Routering from './Pages/Routes/MyRoutes'


ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
           
                <Routering/>
            
        </React.StrictMode>
)
