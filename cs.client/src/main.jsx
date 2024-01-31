import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/login/Login.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Contact from "./pages/contact/Contact.jsx";
import FormContact from "./pages/contact/FormContact.jsx";
import FormContactUpdate from "./pages/contact/FormContactUpdate.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Login />} />,
    <Route path="register" element={<Register />} />,
    <Route path="contacts" element={<Contact />} />,
    <Route path="contacts/form" element={<FormContact />} />,
    <Route path="contacts/form/:id" element={<FormContactUpdate />} />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
