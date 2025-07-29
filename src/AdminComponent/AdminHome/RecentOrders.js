"use client";
import React, { useState } from "react";

const statusColor = {
  Delivered: "text-green-600 font-medium",
  Processing: "text-yellow-600 font-medium",
  Pending: "text-blue-600 font-medium",
  Cancelled: "text-red-600 font-medium",
};

// Sample data with "area" added
const allOrders = [
  {
    product: "Taste of the Wild Formula Finder",
    customer: "2,672",
    productId: "X1",
    quantity: 1,
    price: "$28,672.36",
    status: "Delivered",
    expiration: "2023-12-15",
    stock: "1,245",
    area: "Urban",
    ageGroup: "25-34",
    payment: "Visa",
    date: "2023-10-15",
    zone: "North",
  },
  {
    product: "Proden Plaqueoff Dental Bites Dog, 150 G",
    customer: "2,672",
    productId: "X2",
    quantity: 2,
    price: "$28,672.36",
    status: "Processing",
    expiration: "2024-02-20",
    stock: "876",
    area: "Suburban",
    ageGroup: "35-44",
    payment: "Mastercard",
    date: "2023-10-14",
    zone: "South",
  },
  {
    product: "ACME Cat Food Supreme",
    customer: "3,201",
    productId: "X3",
    quantity: 5,
    price: "$1,200.00",
    status: "Pending",
    expiration: "2024-05-15",
    stock: "350",
    area: "Urban",
    ageGroup: "18-24",
    payment: "Amex",
    date: "2023-09-25",
    zone: "East",
  },
  {
    product: "Omega Dog Chews",
    customer: "1,024",
    productId: "X4",
    quantity: 3,
    price: "$2,400.00",
    status: "Cancelled",
    expiration: "2024-06-10",
    stock: "100",
    area: "Rural",
    ageGroup: "45-54",
    payment: "Visa",
    date: "2023-10-01",
    zone: "West",
  },
  {
    product: "Grain-Free Cat Treats",
    customer: "897",
    productId: "X5",
    quantity: 1,
    price: "$450.00",
    status: "Delivered",
    expiration: "2024-03-11",
    stock: "400",
    area: "Urban",
    ageGroup: "25-34",
    payment: "PayPal",
    date: "2023-08-22",
    zone: "North",
  },
  {
    product: "Large Breed Dog Food",
    customer: "2,435",
    productId: "X6",
    quantity: 4,
    price: "$3,600.00",
    status: "Processing",
    expiration: "2024-04-09",
    stock: "680",
    area: "Suburban",
    ageGroup: "35-44",
    payment: "Mastercard",
    date: "2023-09-10",
    zone: "South",
  },
  {
    product: "Puppy Starter Kit",
    customer: "1,110",
    productId: "X7",
    quantity: 2,
    price: "$1,800.00",
    status: "Pending",
    expiration: "2024-08-20",
    stock: "220",
    area: "Rural",
    ageGroup: "18-24",
    payment: "Visa",
    date: "2023-11-01",
    zone: "East",
  },
  {
    product: "Cat Litter Premium",
    customer: "3,020",
    productId: "X8",
    quantity: 6,
    price: "$2,200.00",
    status: "Cancelled",
    expiration: "2024-07-15",
    stock: "500",
    area: "Urban",
    ageGroup: "25-34",
    payment: "Stripe",
    date: "2023-07-30",
    zone: "Central",
  },
];

export default function RecentOrdersTable() {
  const [orders, setOrders] = useState(allOrders);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const handleStatusChange = (index, newStatus) => {
    const realIndex = (page - 1) * itemsPerPage + index;
    const updated = [...orders];
    updated[realIndex].status = newStatus;
    setOrders(updated);
  };

  const paginatedOrders = orders.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const totalPages = Math.ceil(orders.length / itemsPerPage);

  return (
    <div className="bg-white text-black px-[20px] mt-[40px] p-6 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[1900px] w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">Product</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Customer</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Product ID</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Quantity</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Price</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Status</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Expiration</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Stock</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Purchase Area</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Zone</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Age Group</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Payment Method</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Purchase Date</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-200">{order.product}</td>
                <td className="px-4 py-2 border border-gray-200">{order.customer}</td>
                <td className="px-4 py-2 border border-gray-200">{order.productId}</td>
                <td className="px-4 py-2 border border-gray-200">{order.quantity}</td>
                <td className="px-4 py-2 border border-gray-200">{order.price}</td>
                <td className={`px-4 py-2 border border-gray-200 ${statusColor[order.status]}`}>
                  {order.status}
                </td>
                <td className="px-4 py-2 border border-gray-200">{order.expiration}</td>
                <td className="px-4 py-2 border border-gray-200">{order.stock}</td>
                <td className="px-4 py-2 border border-gray-200">{order.area}</td>
                <td className="px-4 py-2 border border-gray-200">{order.zone}</td>
                <td className="px-4 py-2 border border-gray-200">{order.ageGroup}</td>
                <td className="px-4 py-2 border border-gray-200">{order.payment}</td>
                <td className="px-4 py-2 border border-gray-200">{order.date}</td>
                <td className="px-4 py-2 border border-gray-200">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="Processing">Processing</option>
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <p>
          Page {page} of {totalPages}
        </p>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
