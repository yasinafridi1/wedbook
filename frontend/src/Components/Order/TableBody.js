import React from "react";
const TableBody = ({ data, Index }) => {
  return (
    <>
      <tr className="text-black">
        <td className="border px-4 py-2">
          <p className="font-semibold text-sm">{data.OrderId}</p>
        </td>
        <td className="border px-4 py-2">{data.CustomerName}</td>
        <td className="border px-4 py-2">{data.Contact}</td>
        {/* <td className="border px-4 py-2">
                    <div className="inline-block relative w-64">
                        <form>
                            <input type="hidden" name="orderId" />
                            <select name="status" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-1 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                <option value="Pending">
                                    Pending</option>
                                <option value="Approved">
                                    Approved</option>
                                <option value="Rejected">
                                    Rejected</option>
                              
                            </select>
                        </form>
                        <div
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20">
                                <path
                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </td> */}
        <td className="border px-4 py-2">{data.From}</td>
        <td className="border px-4 py-2">{data.To}</td>
        <td className="border px-4 py-2">{data.Price}</td>
        {/* <td className="border px-4 py-2">{data.Status}</td> */}
        {/* <td className="border px-4 py-2">
                    01:45PM
                </td> */}
      </tr>
    </>
  );
};

export default TableBody;
