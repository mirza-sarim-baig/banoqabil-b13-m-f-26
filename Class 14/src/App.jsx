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
import Students from "./components/Students";
import StudentDetail from "./components/StudentDetail";
import AdminList from "./components/AdminList";
import AdminDetails from "./components/AdminDetails";

function App() {
  return (
    <>
      {/* <Sidebar />
      <LoginPage />
      <SignupPage /> */}

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardAnalytics />} />
          <Route path="users" element={<Users />}>
            <Route index element={"Teachers"} />
            <Route path="admin" element={<AdminList />} />
            <Route path="admin/:id" element={<AdminDetails />} />
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<StudentDetail />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
