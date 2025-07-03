import React from 'react';

const Spreadsheet: React.FC = () => {
  const data = [
    {
      jobRequest: "Launch social media campaign for product XYZ",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel.com",
      assigned: ["Sophie Choudhury"],
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000",
    },
    {
      jobRequest: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanportfolio.com",
      assigned: ["Tejas Pandey"],
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000",
    },
    {
      jobRequest: "Finalize user testing feedback for app update",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohnsondesigns.com",
      assigned: ["Rachel Lee"],
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000",
    },
    {
      jobRequest: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreenart.com",
      assigned: ["Tom Wright"],
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000",
    },
    {
      jobRequest: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabrowncreative.com",
      assigned: ["Kevin Smith"],
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000",
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header bar */}
      <div className="bg-white border-b px-6 py-3 text-lg font-semibold shadow-sm sticky top-0 z-20">
        Workspace / Folder 2 / Spreadsheet 3
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b px-6 py-2 flex items-center gap-4 text-sm sticky top-12 z-10">
        <button className="text-gray-600 hover:text-black">Tool bar</button>
        <button className="text-gray-600 hover:text-black">Hide fields</button>
        <button className="text-gray-600 hover:text-black">Sort</button>
        <button className="text-gray-600 hover:text-black">Filter</button>
        <button className="text-gray-600 hover:text-black">Cell view</button>
        <div className="ml-auto flex gap-2">
          <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100">Import</button>
          <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100">Export</button>
          <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100">Share</button>
          <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded text-sm font-medium">+ New Action</button>
        </div>
      </div>

      {/* Content scrollable area */}
      <div className="flex-1 overflow-auto pb-20">
        <div className="border shadow-sm">
          <table className="w-full min-w-[1400px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-white px-3 py-3 text-center border border-gray-200">#</th>
                <th className="bg-gray-50 px-3 py-3 text-left border border-gray-200">Job Request</th>
                <th className="bg-gray-50 px-3 py-3 text-right border border-gray-200">Submitted</th>
                <th className="bg-gray-50 px-3 py-3 text-center border border-gray-200">Status</th>
                <th className="bg-gray-50 px-3 py-3 text-left border border-gray-200">Submitter</th>
                <th className="bg-gray-50 px-2 py-3 text-left max-w-[10px] border border-gray-200">URL</th>
                <th className="bg-green-50 px-3 py-3 text-left border border-gray-200">Assigned</th>
                <th className="bg-purple-50 px-3 py-3 text-center border border-gray-200">Priority</th>
                <th className="bg-purple-50 px-3 py-3 text-right border border-gray-200">Due Date</th>
                <th className="bg-orange-50 px-3 py-3 text-right border border-gray-200">Est. Value</th>
                <th className="bg-white px-9 py-3 text-center border border-gray-200"><span className="text-gray-500">+</span></th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="text-center border border-gray-200">{i + 1}</td>
                  <td className="px-3 py-3 text-left truncate max-w-[210px] border border-gray-200">{row.jobRequest}</td>
                  <td className="px-3 py-3 text-right border border-gray-200">{row.submitted}</td>
                  <td className="px-3 py-3 text-center border border-gray-200">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${row.status === "In-process"
                        ? "bg-yellow-100 text-yellow-800"
                        : row.status === "Need to start"
                          ? "bg-blue-100 text-blue-800"
                          : row.status === "Blocked"
                            ? "bg-red-100 text-red-800"
                            : row.status === "Complete"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-left border border-gray-200">{row.submitter}</td>
                  <td className="px-2 py-3 text-left truncate max-w-[140px] border border-gray-200">
                    <a href={`https://${row.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                      {row.url}
                    </a>
                  </td>
                  <td className="px-3 py-3 text-left border border-gray-200">{row.assigned.join(", ")}</td>
                  <td className={`px-3 py-3 text-center border border-gray-200 font-semibold text-sm ${
                    row.priority === "High"
                      ? "text-red-600"
                      : row.priority === "Medium"
                        ? "text-yellow-600"
                        : "text-blue-600"
                  }`}>
                    {row.priority}
                  </td>
                  <td className="px-3 py-3 text-right border border-gray-200">{row.dueDate}</td>
                  <td className="px-3 py-3 text-right border border-gray-200">{row.estValue} <span className="text-gray-400">₹</span></td>
                  <td className="px-6 border border-gray-200">&nbsp;</td>
                </tr>
              ))}

              {/* Empty rows */}
              {Array.from({ length: 20 }).map((_, i) => (
                <tr key={`empty-${i}`} className="hover:bg-gray-50">
                  {Array.from({ length: 11 }).map((_, j) => (
                    <td key={j} className={`h-10 border border-gray-200 ${j === 10 ? 'px-6' : ''}`}>&nbsp;</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sticky bottom tab bar */}
      <div className="sticky bottom-0 bg-white border-t px-6 py-3 flex space-x-6 text-sm z-10">
        <span className="text-green-700 font-semibold border-b-2 border-green-700 pb-1 cursor-pointer">All Orders</span>
        <span className="text-gray-500 cursor-pointer">Pending</span>
        <span className="text-gray-500 cursor-pointer">Reviewed</span>
        <span className="text-gray-500 cursor-pointer">Arrived</span>
        <span className="text-gray-500 cursor-pointer">+</span>
      </div>
    </div>
  );
};

export default Spreadsheet;
