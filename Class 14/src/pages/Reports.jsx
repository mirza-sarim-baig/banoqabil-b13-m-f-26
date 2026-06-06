import React from "react";
import { Search, Download, Filter } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: "#REP-1001",
      student: "John Doe",
      course: "Mathematics",
      attendance: "92%",
      fees: "$1,200",
      status: "Paid",
    },
    {
      id: "#REP-1002",
      student: "Sarah Lee",
      course: "Physics",
      attendance: "88%",
      fees: "$980",
      status: "Pending",
    },
    {
      id: "#REP-1003",
      student: "Michael Brown",
      course: "Computer Science",
      attendance: "95%",
      fees: "$1,450",
      status: "Paid",
    },
    {
      id: "#REP-1004",
      student: "Emma Wilson",
      course: "Biology",
      attendance: "81%",
      fees: "$760",
      status: "Overdue",
    },
    {
      id: "#REP-1005",
      student: "David Kim",
      course: "Chemistry",
      attendance: "90%",
      fees: "$1,050",
      status: "Paid",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-600";

      case "Pending":
        return "bg-yellow-100 text-yellow-600";

      case "Overdue":
        return "bg-red-100 text-red-600";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>

          <p className="text-gray-500 mt-1">
            Student attendance, fees & course reports
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-4 py-3 w-72">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search reports..."
              className="ml-3 w-full outline-none text-sm bg-transparent"
            />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-2xl text-gray-700 hover:bg-gray-100 transition">
            <Filter size={18} />
            Filter
          </button>

          {/* Export */}
          <button className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition">
            <Download size={18} />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            {/* Table Head */}
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr className="text-left text-sm text-gray-500">
                <th className="px-6 py-4 font-medium">Report ID</th>
                <th className="px-6 py-4 font-medium">Student</th>
                <th className="px-6 py-4 font-medium">Course</th>
                <th className="px-6 py-4 font-medium">Attendance</th>
                <th className="px-6 py-4 font-medium">Fees</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {reports.map((report, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {report.id}
                  </td>

                  <td className="px-6 py-5 text-gray-700">{report.student}</td>

                  <td className="px-6 py-5 text-gray-700">{report.course}</td>

                  <td className="px-6 py-5 text-gray-700">
                    {report.attendance}
                  </td>

                  <td className="px-6 py-5 text-gray-700">{report.fees}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                        report.status,
                      )}`}
                    >
                      {report.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
          <p className="text-sm text-gray-500">Showing 1 to 5 of 25 reports</p>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-100 transition">
              Previous
            </button>

            <button className="px-4 py-2 bg-black text-white rounded-xl text-sm">
              1
            </button>

            <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-100 transition">
              2
            </button>

            <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm hover:bg-gray-100 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
