import React, { useState } from 'react';

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

  const [showToolbarMenu, setShowToolbarMenu] = useState(true);
  const toggleToolbarMenu = () => setShowToolbarMenu(prev => !prev);

  let idx: number = data.length;

  const importClick: () => void = () => { alert("The import button was clicked"); };
  const exportClick: () => void = () => { alert("The export button was clicked"); };
  const shareClick: () => void = () => { alert("The share button was clicked"); };
  const newAct: () => void = () => { alert("A new Acion is to be performed"); };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header bar */}
      <div className="bg-white border-b px-6 py-3 text-lg font-semibold shadow-sm sticky top-0 z-20">
        Workspace / Folder 2 / Spreadsheet 3
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b px-6 py-2 text-sm sticky top-12 z-10">
        <div className="flex items-center gap-4">
          {/* Tool bar button */}
          <button
            onClick={toggleToolbarMenu}
            className="text-gray-600 hover:text-black"
          >
            Tool bar &gt;&gt;
          </button>

          {/* Inline dropdown buttons */}
          {showToolbarMenu && (
            <div className="flex items-center transition-all">
              <button className="text-gray-600 hover:text-black px-3 py-1">Hide fields</button>
              <button className="text-gray-600 hover:text-black px-3 py-1">Sort</button>
              <button className="text-gray-600 hover:text-black px-3 py-1">Filter</button>
              <button className="text-gray-600 hover:text-black px-3 py-1">Cell view</button>
            </div>
          )}

          {/* Right-aligned utility buttons */}
          <div className="ml-auto flex gap-2">
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={importClick}>Import</button>
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={exportClick}>Export</button>
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={shareClick}>Share</button>
            <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded text-sm font-medium" onClick={newAct}>+ New Action</button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto pb-20">
        <div className="border shadow-sm">
          <table className="w-full min-w-[1400px] border-collapse text-sm">
            <thead>
              {/* Segmentation row inside table */}
              <tr>
                <th className="bg-white px-2 py-2 text-center border border-white">
                  <div className="text-gray-400"></div>
                </th>
                <th colSpan={4} className="bg-gray-300 px-2 py-2 border border-white">
                  <div className="text-left bg-white w-fit text-sm font-semibold px-2">Q3 financial overview</div>
                </th>
                <th className="bg-white px-2 py-2 border border-white">
                </th>
                <th className="bg-green-200 px-2 py-2 border border-white">
                  <div className="text-gray-500 font-semibold">ABC</div>
                </th>
                <th colSpan={2} className="bg-purple-200 px-2 py-2 border border-white">
                  <div className="text-gray-500 font-semibold">Answer a Question</div>
                </th>
                <th className="bg-orange-200 px-2 py-2 border border-white">
                  <div className="text-gray-500 font-semibold">Extract</div>
                </th>
                <th className="bg-white px-2 py-2 border border-gray-200">
                  <span className="text-gray-500 font-semibold">+</span>
                </th>
              </tr>

              {/* Table header row */}
              <tr>
                <td className="bg-gray-200 px-2 py-2 text-center border border-white">
                  <span className="text-gray-400 text-2xl font-normal">#</span>
                </td>
                <th className="bg-gray-200 px-3 py-3 text-left border border-white text-gray-500">Job Request</th>
                <th className="bg-gray-200 px-3 py-3 text-right border border-white text-gray-500">Submitted</th>
                <th className="bg-gray-200 px-3 py-3 text-center border border-white text-gray-500">Status</th>
                <th className="bg-gray-200 px-3 py-3 text-left border border-white text-gray-500">Submitter</th>
                <th className="bg-gray-200 px-3 py-3 text-left border border-white text-gray-500">URL</th>
                <th className="bg-green-100 px-3 py-3 text-left border border-white text-gray-500">Assigned</th>
                <th className="bg-purple-100 px-3 py-3 text-center border border-white text-gray-500">Priority</th>
                <th className="bg-purple-100 px-3 py-3 text-right border border-white text-gray-500">Due Date</th>
                <th className="bg-orange-100 px-3 py-3 text-right border border-white text-gray-500">Est. Value</th>
                <th className="bg-white px-20 py-3 text-center border border-gray-200"></th>
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
                  <td className={`px-3 py-3 text-center border border-gray-200 font-semibold text-sm ${row.priority === "High"
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
                    <td key={j} className={`h-10 border border-gray-200 ${j === 10 ? 'px-6' : ''} ${j === 0 ? 'text-center' : ''}`}>{j === 0 ? `${++idx}` : ''}</td>
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
