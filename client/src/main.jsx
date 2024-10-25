import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {CategoryProvider, ProductProvider, AuthProvider, CartProvider} from "./Context/index.js";

createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <CategoryProvider>
            <ProductProvider>
                <CartProvider>
                    <App/>
                </CartProvider>
            </ProductProvider>
        </CategoryProvider>
    </AuthProvider>,
)
