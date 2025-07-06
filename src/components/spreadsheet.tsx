import React, { useState, useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  createColumnHelper,
  type SortingState,
  type ColumnFiltersState,
  type VisibilityState,
} from '@tanstack/react-table';

const Spreadsheet: React.FC = () => {
  const data = useMemo(() => [
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
  ], []);

  const columnHelper = createColumnHelper<typeof data[0]>();

  const columns = useMemo(() => [
    columnHelper.display({
      id: 'rowNumber',
      header: () => (
        <span className="text-gray-400 text-2xl font-normal">#</span>
      ),
      cell: info => info.row.index + 1,
    }),
    columnHelper.accessor('jobRequest', {
      header: () => "Job Request",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('submitted', {
      header: () => "Submitted",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: () => "Status",
      cell: info => {
        const status = info.getValue();
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${status === "In-process"
              ? "bg-yellow-100 text-yellow-800"
              : status === "Need to start"
                ? "bg-blue-100 text-blue-800"
                : status === "Blocked"
                  ? "bg-red-100 text-red-800"
                  : status === "Complete"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"}`}>
            {status}
          </span>
        );
      },
    }),
    columnHelper.accessor('submitter', {
      header: () => "Submitter",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('url', {
      header: () => "URL",
      cell: info => (
        <a href={`https://${info.getValue()}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          {info.getValue()}
        </a>
      ),
    }),
    columnHelper.accessor('assigned', {
      header: () => "Assigned",
      cell: info => info.getValue().join(", "),
    }),
    columnHelper.accessor('priority', {
      header: () => "Priority",
      cell: info => {
        const priority = info.getValue();
        return (
          <span className={`font-semibold text-sm ${priority === "High"
            ? "text-red-600"
            : priority === "Medium"
              ? "text-yellow-600"
              : "text-blue-600"
            }`}>
            {priority}
          </span>
        );
      },
    }),
    columnHelper.accessor('dueDate', {
      header: () => "Due Date",
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('estValue', {
      header: () => "Est. Value",
      cell: info => (
        <span>
          {info.getValue()} <span className="text-gray-400">₹</span>
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: () => "",
      cell: () => <span>&nbsp;</span>,
    }),
  ], []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const [showToolbarMenu, setShowToolbarMenu] = useState(true);
  const toggleToolbarMenu = () => setShowToolbarMenu(prev => !prev);

  let idx: number = data.length;

  const importClick: () => void = () => { alert("The import button was clicked"); };
  const exportClick: () => void = () => { alert("The export button was clicked"); };
  const shareClick: () => void = () => { alert("The share button was clicked"); };
  const newAct: () => void = () => { alert("A new Acion is to be performed"); };

  const [hoveredCell, setHoveredCell] = useState<{ row: string; col: number } | null>(null);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      {/* Header bar */}
      <div className="bg-white border-b px-6 py-2 text-sm font-semibold shadow-sm sticky top-0 z-20 flex items-center">
        <span className='text-gray-400'>Workspace &gt; Folder 2 &gt;</span>
        <span className="ml-1">Spreadsheet 3</span>
        <div className="ml-auto flex items-center gap-4">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search…"
              className="pl-9 pr-3 py-1.5 rounded border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            />
            <svg
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          {/* Notification icon */}
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {/* Notification badge with number */}
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-white">
              2
            </span>
          </button>
          {/* Profile picture */}
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
          />
        </div>
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
              {/* Hide fields (toggle Est. Value column) */}
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => {
                  table.getColumn('estValue')?.toggleVisibility();
                }}
              >
                {table.getColumn('estValue')?.getIsVisible() ? 'Hide fields' : 'Show fields'}
              </button>
              {/* Sort by Due Date */}
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => {
                  const current = table.getState().sorting.find(s => s.id === 'dueDate');
                  if (!current) {
                    table.setSorting([{ id: 'dueDate', desc: false }]);
                  } else if (!current.desc) {
                    table.setSorting([{ id: 'dueDate', desc: true }]);
                  } else {
                    table.setSorting([]);
                  }
                }}
              >
                Sort
              </button>
              {/* Filter by Status */}
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => {
                  const col = table.getColumn('status');
                  if (!col) return;
                  const current = col.getFilterValue();
                  if (current === 'In-process') {
                    col.setFilterValue('');
                  } else {
                    col.setFilterValue('In-process');
                  }
                }}
              >
                {table.getColumn('status')?.getFilterValue() === 'In-process' ? 'Clear Filter' : 'Filter'}
              </button>
              {/* Cell view (toggle Priority column) */}
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => {
                  table.getColumn('priority')?.toggleVisibility();
                }}
              >
                {table.getColumn('priority')?.getIsVisible() ? 'Cell View' : 'Normal view'}
              </button>
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
                <th className="bg-orange-200 px-2 py-2 border border-white border-r-0">
                  <div className="text-gray-500 font-semibold">Extract</div>
                </th>
                <th className="bg-gray-200 px-12 py-2 border border-gray-200" style={{ borderLeftColor: 'gray', borderLeftStyle: 'dashed', borderRightColor: 'gray', borderRightStyle: 'dashed' }}>
                  <span className="text-gray-500 text-xl font-semibold">+</span>
                </th>
              </tr>
              {/* Table header row */}
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, idx) => (
                    <th
                      key={header.id}
                      className={
                        idx === 0
                          ? "bg-gray-200 px-2 py-2 text-center border border-white"
                          : idx === 1
                            ? "bg-gray-200 px-3 py-3 text-left border border-white text-gray-500"
                            : idx === 2
                              ? "bg-gray-200 px-3 py-3 text-left border border-white text-gray-500"
                              : idx === 3
                                ? "bg-gray-200 px-3 py-3 text-left border border-white text-gray-500"
                                : idx === 4
                                  ? "bg-gray-200 px-3 py-3 text-left border border-white text-gray-500"
                                  : idx === 5
                                    ? "bg-gray-200 px-3 py-3 text-left border border-white text-gray-500"
                                    : idx === 6
                                      ? "bg-green-100 px-3 py-3 text-left border border-white text-gray-500"
                                      : idx === 7
                                        ? "bg-purple-100 px-3 py-3 text-left border border-white text-gray-500"
                                        : idx === 8
                                          ? "bg-purple-100 px-3 py-3 text-left border border-white text-gray-500"
                                          : idx === 9
                                            ? "bg-orange-100 px-3 py-3 text-left border border-white text-gray-500 border-r-0"
                                            : idx === 10
                                              ? "bg-white px-10 py-3 text-left border border-gray-200"
                                              : ""
                      }
                      style={idx === 10
                        ? { borderLeftColor: 'gray', borderLeftStyle: 'dashed', borderRightColor: 'gray', borderRightStyle: 'dashed' }
                        : undefined
                      }
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell, idx) => (
                    <td
                      key={cell.id}
                      className={
                        (idx === 0
                          ? "bg-gray-50 px-2 py-2 text-center border border-white"
                          : idx === 1
                            ? "px-3 py-3 text-left truncate max-w-[210px] border border-gray-200"
                            : idx === 2
                              ? "px-3 py-3 text-right border border-gray-200"
                              : idx === 3
                                ? "px-3 py-3 text-center border border-gray-200"
                                : idx === 4
                                  ? "px-3 py-3 text-left border border-gray-200"
                                  : idx === 5
                                    ? "px-2 py-3 text-left truncate max-w-[140px] border border-gray-200"
                                    : idx === 6
                                      ? "px-3 py-3 text-left border border-gray-200"
                                      : idx === 7
                                        ? "px-3 py-3 text-center border border-gray-200"
                                        : idx === 8
                                          ? "px-3 py-3 text-right border border-gray-200"
                                          : idx === 9
                                            ? "px-3 py-3 text-right border border-gray-200 border-r-0"
                                            : idx === 10
                                              ? "px-6 border border-gray-200"
                                              : ""
                        ) +
                        (hoveredCell && hoveredCell.row === row.id && hoveredCell.col === idx
                          ? " border-green-500 border-2"
                          : "")
                      }
                      style={idx === 10
                        ? { borderLeftColor: 'gray', borderLeftStyle: 'dashed', borderRightColor: 'gray', borderRightStyle: 'dashed' }
                        : undefined
                      }
                      onMouseEnter={() => setHoveredCell({ row: row.id, col: idx })}
                      onMouseLeave={() => setHoveredCell(null)}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
              {/* Empty rows */}
              {Array.from({ length: 20 }).map((_, i) => (
                <tr key={`empty-${i}`}>
                  {Array.from({ length: 11 }).map((_, j) => (
                    <td
                      key={j}
                      className={`h-10 border border-gray-200 ${j === 10 ? 'px-6' : ''} ${j === 0 ? 'text-center' : ''} ${j === 9 ? 'border-r-0' : ''} hover:border-green-500 hover:border-2`}
                      style={{
                        borderLeftColor: `${j === 10 ? 'gray' : ''}`,
                        borderLeftStyle: `${j === 10 ? 'dashed' : 'solid'}`,
                        borderRightColor: `${j === 10 ? 'gray' : ''}`,
                        borderRightStyle: `${j === 10 ? 'dashed' : 'solid'}`
                      }}
                    >
                      {j === 0 ? `${data.length + i + 1}` : ''}
                    </td>
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
    </div >
  );
};

export default Spreadsheet;