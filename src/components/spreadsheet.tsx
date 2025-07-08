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

import { VscEyeClosed, VscEye, VscLayoutPanel } from "react-icons/vsc";
import { IoFilterSharp, IoPerson, IoLink } from "react-icons/io5";
import { MdFilterListOff } from "react-icons/md";
import { FaGlobe, FaCalendarAlt } from "react-icons/fa";
import { FaBriefcase, FaRegShareFromSquare, FaTableCells } from "react-icons/fa6";
import { LiaDownloadSolid } from "react-icons/lia";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { PiArrowsSplit } from "react-icons/pi";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { LuArrowDownUp } from "react-icons/lu";
import { GrPowerCycle } from "react-icons/gr";

const Spreadsheet: React.FC = () => {
  const [tableData, setTableData] = useState([
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
  ]);

  const columnHelper = createColumnHelper<typeof tableData[0]>();
  const [hiddenCells, setHiddenCells] = useState<{ [key: string]: boolean }>({});
  const [showEmptyRows, setShowEmptyRows] = useState(true);

  const columns = useMemo(() => [
    columnHelper.display({
      id: 'rowNumber',
      header: () => (
        <span className="text-gray-400 text-2xl font-normal">#</span>
      ),
      cell: info => info.row.index + 1,
    }),
    columnHelper.accessor('jobRequest', {
      header: () => {
        const isHidden = hiddenCells['jobRequest'];
        return (
          <span className="flex items-center">
            <FaBriefcase className="inline mr-1 w-4 h-4" />
            Job Request
            <span
              className="ml-auto cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setHiddenCells(prev => ({
                  ...prev,
                  jobRequest: !prev.jobRequest,
                }));
              }}
            >
              {isHidden
                ? <RiArrowDropUpLine className="w-5 h-5" />
                : <RiArrowDropDownLine className="w-5 h-5" />
              }
            </span>
          </span>
        );
      },
      cell: info => hiddenCells['jobRequest'] ? "" : info.getValue(),
    }),
    columnHelper.accessor('submitted', {
      header: () => {
        const isHidden = hiddenCells['submitted'];
        return (
          <span className="flex items-center">
            <FaCalendarAlt className="inline mr-1 w-4 h-4" />
            Submitted
            <span
              className="ml-auto cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setHiddenCells(prev => ({
                  ...prev,
                  submitted: !prev.submitted,
                }));
              }}
            >
              {isHidden
                ? <RiArrowDropUpLine className="w-5 h-5" />
                : <RiArrowDropDownLine className="w-5 h-5" />
              }
            </span>
          </span>
        );
      },
      cell: info => hiddenCells['submitted'] ? "" : info.getValue(),
    }),
    columnHelper.accessor('status', {
      header: () => {
        const isHidden = hiddenCells['status'];
        return (
          <span className="flex items-center">
            <IoIosArrowDropdownCircle className="inline mr-1 w-4 h-4" />
            Status
            <span
              className="ml-auto cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setHiddenCells(prev => ({
                  ...prev,
                  status: !prev.status,
                }));
              }}
            >
              {isHidden
                ? <RiArrowDropUpLine className="w-5 h-5" />
                : <RiArrowDropDownLine className="w-5 h-5" />
              }
            </span>
          </span>
        );
      },
      cell: info => hiddenCells['status'] ? "" : (
        <span className={`px-2 py-1 rounded-full text-xs font-medium
      ${info.getValue() === "In-process"
            ? "bg-yellow-100 text-yellow-800"
            : info.getValue() === "Need to start"
              ? "bg-blue-100 text-blue-800"
              : info.getValue() === "Blocked"
                ? "bg-red-100 text-red-800"
                : info.getValue() === "Complete"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"}`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('submitter', {
      header: () => {
        const isHidden = hiddenCells['submitter'];
        return (
          <span className="flex items-center">
            <IoPerson className="inline mr-1 w-4 h-4" />
            Submitter
            <span
              className="ml-auto cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setHiddenCells(prev => ({
                  ...prev,
                  submitter: !prev.submitter,
                }));
              }}
            >
              {isHidden
                ? <RiArrowDropUpLine className="w-5 h-5" />
                : <RiArrowDropDownLine className="w-5 h-5" />
              }
            </span>
          </span>
        );
      },
      cell: info => hiddenCells['submitter'] ? "" : info.getValue(),
    }),
    columnHelper.accessor('url', {
      header: () => {
        const isHidden = hiddenCells['url'];
        return (
          <span className="flex items-center">
            <FaGlobe className="inline mr-1 w-4 h-4" />
            URL
            <span
              className="ml-auto cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setHiddenCells(prev => ({
                  ...prev,
                  url: !prev.url,
                }));
              }}
            >
              {isHidden
                ? <RiArrowDropUpLine className="w-5 h-5" />
                : <RiArrowDropDownLine className="w-5 h-5" />
              }
            </span>
          </span>
        );
      },
      cell: info => hiddenCells['url'] ? "" : (
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
  ], [hiddenCells]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: tableData,
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
  const [showHeader, setShowHeader] = useState(true);
  const [hoveredCell, setHoveredCell] = useState<{ row: string; col: number } | null>(null);
  const [selectedTab, setSelectedTab] = useState("All Orders");
  const [emptyRowCount, setEmptyRowCount] = useState(20);

  const tableContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const el = tableContainerRef.current;
      if (!el) return;
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 200) {
        setEmptyRowCount(count => count + 20);
      }
    };
    const el = tableContainerRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <div className="bg-white border-b px-6 py-2 text-sm font-semibold shadow-sm sticky top-0 z-20 flex items-center">
        <VscLayoutPanel className='-rotate-90 w-5 h-5 mr-3 text-green-600' />
        <span className='text-gray-400'>Workspace &gt; Folder 2 &gt;</span>
        <span className="ml-1">Spreadsheet 3</span>
        <div className="ml-auto flex items-center gap-4">
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
          <button className="relative p-2 rounded-full hover:bg-gray-100" onClick={() => { alert("You have 2 Notifications") }}>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center ring-2 ring-white">
              2
            </span>
          </button>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full border-2 border-green-500 object-cover"
          />
        </div>
      </div>

      <div className="bg-white border-b px-6 py-2 text-sm sticky top-12 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleToolbarMenu}
            className="text-gray-600 hover:text-black"
          >
            Tool bar &gt;&gt;
          </button>
          {showToolbarMenu && (
            <div className="flex items-center transition-all">
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => setShowHeader((prev) => !prev)}
              >
                {showHeader ? (
                  <>
                    <VscEyeClosed className="inline mr-1 mb-1 w-4 h-4" />
                    Hide fields
                  </>
                ) : (
                  <>
                    <VscEye className="inline mr-1 mb-1 w-4 h-4" />
                    Show fields
                  </>
                )}
              </button>
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
                <LuArrowDownUp className='inline mr-1 mb-1 w-4 h-4' />Sort
              </button>
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
                {table.getColumn('status')?.getFilterValue() === 'In-process' ? (<><MdFilterListOff className='inline mr-1 mb-1 w-4 h-4' />Clear Filter</>) : (<><IoFilterSharp className='inline mr-1 mb-1 w-4 h-4' />Filter</>)}
              </button>
              <button
                className="text-gray-600 hover:text-black px-3 py-1"
                onClick={() => setShowEmptyRows(prev => !prev)}
              >
                {showEmptyRows
                  ? (<><TbArrowAutofitHeight className='inline mr-1 mb-1 w-4 h-4' />Cell View</>)
                  : (<><FaTableCells className='inline mr-1 mb-1 w-4 h-4' />Normal View</>)}
              </button>
            </div>
          )}

          <div className="ml-auto flex gap-2">
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={() => { alert("The data was Imported"); }}><LiaDownloadSolid className='inline mr-1 mb-1 w-4 h-4' />Import</button>
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={() => { alert("The data was Exported"); }}><LiaDownloadSolid className='inline mr-1 mb-1 w-4 h-4 rotate-180' />Export</button>
            <button className="text-sm bg-white border px-3 py-1 rounded hover:bg-gray-100" onClick={() => { alert("The data was Shared"); }}><FaRegShareFromSquare className='inline mr-1 mb-1 w-4 h-4' />Share</button>
            <button className="text-white bg-green-600 hover:bg-green-700 px-4 py-1.5 rounded text-sm font-medium" onClick={() => { alert("A new Acion was performed"); }}><PiArrowsSplit className='inline mr-1 mb-1 w-4 h-4' />New Action</button>
          </div>
        </div>
      </div>

      <div
        ref={tableContainerRef}
        className="flex-1 overflow-auto pb-20"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <div className="border shadow-sm">
          <table className="w-full min-w-[1400px] border-collapse text-sm">
            {showHeader && (
              <thead>
                <tr>
                  <th className="bg-white px-2 py-2 text-center border border-white">
                    <div className="text-gray-400"></div>
                  </th>
                  <th colSpan={4} className="bg-gray-300 px-2 py-2 border border-white">
                    <div className="flex items-center">
                      <div className="flex items-center bg-gray-100 w-fit text-sm font-semibold px-2 py-1 rounded">
                        <IoLink className='inline mr-1 text-blue-500 w-4 h-4' />
                        Q3 financial overview
                      </div>
                      <GrPowerCycle className='inline ml-2 text-orange-500' />
                    </div>
                  </th>
                  <th className="bg-white px-2 py-2 border border-white">
                  </th>
                  <th className="bg-green-200 px-2 py-2 border border-white">
                    <div className="text-gray-500 font-semibold"><PiArrowsSplit className='inline mr-1 mb-1 w-4 h-4' />ABC <BsThreeDots className='inline mr-1 w-4 h-4' /></div>
                  </th>
                  <th colSpan={2} className="bg-purple-200 px-2 py-2 border border-white">
                    <div className="text-gray-500 font-semibold"><PiArrowsSplit className='inline mr-1 mb-1 w-4 h-4' />Answer a Question <BsThreeDots className='inline mr-1 w-4 h-4' /></div>
                  </th>
                  <th className="bg-orange-200 px-2 py-2 border border-white border-r-0">
                    <div className="text-gray-500 font-semibold text-center"><PiArrowsSplit className='inline mr-1 mb-1 w-4 h-4' />Extract <BsThreeDots className='inline mr-1 w-4 h-4' /></div>
                  </th>
                  <th className="bg-gray-200 px-12 py-2 border border-gray-200" style={{ borderLeftColor: 'gray', borderLeftStyle: 'dashed', borderRightColor: 'gray', borderRightStyle: 'dashed' }}>
                    <span className="text-gray-500 text-xl font-semibold cursor-pointer" onClick={() => alert("The User wants to add a New Column")}>+</span>
                  </th>
                </tr>
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
            )}
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
              {showEmptyRows && Array.from({ length: emptyRowCount }).map((_, i) => (
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
                      {j === 0 ? `${tableData.length + i + 1}` : ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t px-6 py-3 flex space-x-6 text-sm z-10">
        {["All Orders", "Pending", "Reviewed", "Arrived"].map(tab => (
          <span
            key={tab}
            className={
              (selectedTab === tab
                ? "text-green-700 font-semibold border-b-2 border-green-700 pb-1 "
                : "text-gray-500 ") +
              "cursor-pointer"
            }
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </span>
        ))}
        <span className="text-gray-500 cursor-pointer" onClick={() => { alert("The User wants to add a new Category") }}>+</span>
      </div>
    </div >
  );
};

export default Spreadsheet;