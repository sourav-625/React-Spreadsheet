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

    const handleClick = (action: string) => {
        console.log(`${action} clicked`);
    };

    return (
        <div className="p-6 max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Spreadsheet View</h1>
                <button
                    onClick={() => handleClick("New Action")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded shadow-sm transition"
                >
                    + New Action
                </button>
            </div>

            <div className="overflow-x-auto border rounded-lg shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="px-4 py-3 text-left">Job Request</th>
                            <th className="px-4 py-3 text-right">Submitted</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3 text-left">Submitter</th>
                            <th className="px-4 py-3 text-left">URL</th>
                            <th className="px-4 py-3 text-left">Assigned</th>
                            <th className="px-4 py-3">Priority</th>
                            <th className="px-4 py-3 text-right">Due Date</th>
                            <th className="px-4 py-3 text-right">Est. Value</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {data.map((row, i) => (
                            <tr
                                key={i}
                                onClick={() => handleClick(`Row ${i + 1}`)}
                                className="hover:bg-gray-50 cursor-pointer transition"
                            >
                                <td className="px-4 py-3 text-left truncate max-w-[250px]">{row.jobRequest}</td>
                                <td className="px-4 py-3 text-right">{row.submitted}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-medium
                    ${row.status === "In-process"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : row.status === "Need to start"
                                                    ? "bg-blue-100 text-blue-800"
                                                    : row.status === "Blocked"
                                                        ? "bg-red-100 text-red-800"
                                                        : row.status === "Complete"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-gray-100 text-gray-800"}`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-left">{row.submitter}</td>
                                <td className="px-4 py-3 text-left truncate max-w-[180px]">
                                    <a
                                        href={`https://${row.url}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 underline"
                                    >
                                        {row.url}
                                    </a>
                                </td>
                                <td className="px-4 py-3 text-left">
                                    {row.assigned.join(", ")}
                                </td>

                                <td
                                    className={`px-4 py-3 font-semibold text-sm ${row.priority === "High"
                                        ? "text-red-600"
                                        : row.priority === "Medium"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                        }`}
                                >
                                    {row.priority}
                                </td>
                                <td className="px-4 py-3 text-right">{row.dueDate}</td>
                                <td className="px-4 py-3 text-right">{row.estValue} <p className="text-gray-400">₹</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Spreadsheet;
