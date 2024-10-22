import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CategoryProvider, ProductProvider} from "./Context/index.js";

createRoot(document.getElementById('root')).render(
    <CategoryProvider>
        <ProductProvider>
            <App/>
        </ProductProvider>
    </CategoryProvider>,
)
