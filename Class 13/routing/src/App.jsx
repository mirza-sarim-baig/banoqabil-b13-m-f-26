import { Route, Routes } from "react-router";
import "./App.css";
import Sidebar from "./components/Sidebar";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import DashboardAnalytics from "./pages/Analytics";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

function App() {
  return (
    <>
      {/* <Sidebar />
      <LoginPage />
      <SignupPage /> */}

      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardAnalytics />} />
          <Route path="users" element={<Users />}>
            <Route index element={"Admin"} />
            <Route path="teachers" element={"Teachers"} />
            <Route path="students" element={"Students"} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
