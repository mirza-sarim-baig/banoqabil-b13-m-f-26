import React from "react";

const DynamicTable = ({ data = [] }) => {
  // Handle Empty Data
  if (!data.length) {
    return (
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center text-gray-500">
        No Data Available
      </div>
    );
  }

  // Get Dynamic Headers
  const headers = Object.keys(data[0]);

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table Head */}
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-600 capitalize"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {item[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
