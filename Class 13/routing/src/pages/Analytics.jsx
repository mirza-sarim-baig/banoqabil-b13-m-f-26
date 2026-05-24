import React from "react";
import { Users, GraduationCap, BookOpen, Wallet } from "lucide-react";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const DashboardAnalytics = () => {
  // Stats Cards
  const stats = [
    {
      title: "Total Students",
      value: "2,450",
      icon: GraduationCap,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Total Teachers",
      value: "120",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Courses",
      value: "35",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Fees Collected",
      value: "$84,000",
      icon: Wallet,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  // Attendance Data
  const attendanceData = [
    { month: "Jan", attendance: 82 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 91 },
    { month: "Apr", attendance: 86 },
    { month: "May", attendance: 95 },
  ];

  // User Distribution
  const userData = [
    { name: "Students", value: 2450 },
    { name: "Teachers", value: 120 },
    { name: "Admins", value: 15 },
  ];

  const COLORS = ["#2563eb", "#16a34a", "#9333ea"];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard Analytics
        </h1>
        <p className="text-gray-500 mt-1">
          Overview of your school management system
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <h2 className="text-3xl font-bold mt-2 text-gray-900">
                    {item.value}
                  </h2>
                </div>

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
                >
                  <Icon size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Attendance Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">
              Attendance Overview
            </h2>
            <p className="text-sm text-gray-500">Monthly student attendance</p>
          </div>

          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData}>
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Bar
                  dataKey="attendance"
                  fill="#2563eb"
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Distribution */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="mb-5">
            <h2 className="text-xl font-semibold text-gray-900">
              User Distribution
            </h2>
            <p className="text-sm text-gray-500">Students, teachers & admins</p>
          </div>

          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={userData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {userData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Table */}
      <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Courses
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="pb-4">Course</th>
                <th className="pb-4">Students</th>
                <th className="pb-4">Teacher</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr className="border-b">
                <td className="py-4">Mathematics</td>
                <td>120</td>
                <td>John Smith</td>
                <td>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                    Active
                  </span>
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Physics</td>
                <td>90</td>
                <td>Sarah Lee</td>
                <td>
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                    Running
                  </span>
                </td>
              </tr>

              <tr>
                <td className="py-4">Computer Science</td>
                <td>160</td>
                <td>David Kim</td>
                <td>
                  <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm">
                    Popular
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
