# Pos App - Full-Stack Point of Sale System

A robust, full-stack **Point of Sale (POS)** application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Pos App enables businesses to manage products, categories, sales, and bills efficiently with a modern, responsive interface and secure backend. Features include product management, checkout processing, bill tracking, and sales statistics, all wrapped in a user-friendly design.

## ✨ Features

- **Secure Authentication**: JWT-based authentication with user information stored in localStorage.
- **Product & Category Management**: Create, edit, and delete products and categories with intuitive modals.
- **Checkout System**: Seamless transaction processing with a dedicated checkout modal.
- **Bill Tracking**: View and print bills for completed transactions.
- **Search Functionality**: Quickly find products or categories by name.
- **Statistics Dashboard**: Visualize sales and performance metrics.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Form Validation**: Robust form handling with Formik and Yup for error-free inputs.
- **State Management**: Efficient global state handling using React’s useContext and useReducer.

## 🛠️ Technologies Used

### Frontend
- **React**: Dynamic and component-based UI.
- **useContext & useReducer**: Lightweight state management for global data.
- **Formik & Yup**: Streamlined form validation and management.
- **Tailwind CSS**: Modern, utility-first styling for a sleek UI.

### Backend
- **Node.js & Express.js**: Scalable server-side logic for API endpoints.
- **MongoDB**: NoSQL database for flexible data storage.
- **Mongoose**: ORM for efficient database operations.
- **JWT**: Secure authentication with token-based access.

## 📸 Screenshots

### Authentication Page
![Auth Page](https://i.imgur.com/Vc1SRCn.png)
Secure login and signup interface with Formik and Yup validation.

### Home Page
![Home Page](https://i.imgur.com/7FmDKXR.png)
Overview of products and categories with a clean, modern layout.

### Add Product/Category Modal
![Add Modal](https://i.imgur.com/nRPvJhJ.png)
Intuitive modal for adding new products or categories.

### Edit Product/Category Modal
![Edit Modal](https://i.imgur.com/WQUgDU6.png)
Easily update product or category details.

### Edit Product/Category (Color Choose Option)
![Color Choose](https://i.imgur.com/Cu9j6p7.png)
Customizable color selection for products or categories.

### Search Functionality
![Search](https://i.imgur.com/SLPgAi3.png)
Powerful search to quickly find products or categories.

### Checkout Modal
![Checkout Modal](https://i.imgur.com/3IJdWr3.png)
Streamlined interface for processing transactions.

### Bills Page
![Bills Page](https://i.imgur.com/LGS3Hya.png)
View and manage all transaction bills.

### Bill/Print Bill Modal
![Print Bill](https://i.imgur.com/AFLe0cF.png)
Printable bill view for completed transactions.

### Statistics Page
![Statistics Page](https://i.imgur.com/uTLI4Ll.png)
Visual dashboard for sales and performance analytics.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- MongoDB (local or MongoDB Atlas)
- npm or Yarn
- Git

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/mrtmrngz/pos-app-fullstack.git
   cd pos-app-fullstack
   ```

2. **Install Dependencies**:
    - Backend:
      ```bash
      cd backend
      npm install
      # or
      yarn install
      ```
    - Frontend:
      ```bash
      cd ../frontend
      npm install
      # or
      yarn install
      ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in the `backend` directory with the following:
      ```env
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret_key
      PORT=5000
      ```

4. **Run the Application**:
    - Backend:
      ```bash
      cd backend
      npm start
      # or
      yarn start
      ```
    - Frontend:
      ```bash
      cd frontend
      npm start
      # or
      yarn start
      ```
    - Access the app at `http://localhost:3000` (frontend) and `http://localhost:5000` (backend).

## 🖥️ Usage
- **Sign Up/Login**: Register or log in to access the POS system.
- **Manage Products/Categories**: Add or edit products and categories via modals.
- **Process Transactions**: Use the checkout modal to complete sales.
- **Track Bills**: View and print bills from the bills page.
- **Analyze Sales**: Check the statistics page for performance insights.
- **Search**: Find products or categories quickly using the search feature.

## 📂 Project Structure
```
pos-app-fullstack/
├── backend/                # Node.js/Express backend
│   ├── config/             # Database and server configuration
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API endpoints
│   ├── middleware/         # Authentication middleware
│   └── server.js           # Backend entry point
├── frontend/               # React frontend
│   ├── src/                # Components, pages, and styles
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── .gitignore              # Files ignored by Git
└── README.md               # Project documentation
```

## 🤝 Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make changes and commit: `git commit -m "Your message"`.
4. Push to your branch: `git push origin feature/your-feature`.
5. Open a pull request with a clear description.

Please follow the project's coding standards and include relevant tests.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📬 Contact
For questions or feedback, reach out to [mrtmrngz](https://github.com/mrtmrngz) or email [mert00marangoz@gmail.com](mailto:mert00marangoz@gmail.com).

## 🌟 Acknowledgements
- Inspired by modern POS systems for small businesses.
- Thanks to the open-source community for tools like Tailwind CSS, Formik, and Mongoose.