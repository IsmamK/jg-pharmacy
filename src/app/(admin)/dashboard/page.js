import AddAttribute from '@/AdminComponent/AdminHome/AddAttribute';
import OrderSummary from '@/AdminComponent/AdminHome/OrderSummary';
import RecentOrders from '@/AdminComponent/AdminHome/RecentOrders';
import SummaryDashboard from '@/AdminComponent/AdminHome/SummaryDashboard';
import React from 'react';

const page = () => {
    return (
        <div className='bg-[#f2f7fb]'>
            <OrderSummary />
            <AddAttribute />
            <RecentOrders />
            <SummaryDashboard />
        </div>
    );
};

export default page;