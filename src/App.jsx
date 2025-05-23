import { Suspense, useState } from "react";
import "./assets/tailwind.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import User from "./pages/User";

// Lazy imports yang sudah kamu punya
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layout/MainLayout"));
const AuthLayout = React.lazy(() => import("./layout/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const AddOrder = React.lazy(() => import("./pages/AddOrders"));

// Tambahan lazy import untuk guest
const GuestLayout = React.lazy(() => import("./layout/GuestLayout"));
const GuestHome = React.lazy(() => import("./pages/guest/GuestHome"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Route dengan MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/error/:code" element={<Error />} />
          <Route path="/add-customer" element={<AddCustomer />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/user" element={<User />} />
        </Route>

        {/* Route dengan AuthLayout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Route untuk halaman Guest */}
        <Route
          path="/guest"
          element={
            <GuestLayout>
              <GuestHome />
            </GuestLayout>
          }
        />

        {/* Route fallback untuk halaman tidak ditemukan */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
