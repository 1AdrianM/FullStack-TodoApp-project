import { Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Public from './Pages/Public/Public';
import Login from './features/auth/Login/Login';
import DashLayout from "./Pages/DashLayout/DashLayout";
import Welcome from "./Pages/WelcomePage/Welcome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* Dashboard Layout Routes */}
        <Route path="main" element={<DashLayout />}>
          <Route index element={<Welcome />} />

          {/* Nested Routes */}
          <Route path="notes" element={<div>Notes Component Placeholder</div>} />
          <Route path="users" element={<div>Users Component Placeholder</div>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
