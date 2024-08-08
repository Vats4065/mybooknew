
import { getExpense } from '@/app/redux/reducers/customInputExpenseSlice';
import { getIncome } from '@/app/redux/reducers/customInputIncomeSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function TotalComponents() {

    const dispatch = useDispatch()
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [balance, setBalance] = useState(0);
    const incomeData = useSelector((state) => state?.income?.inputIncome);
    const expenseData = useSelector((state) => state?.expense?.inputexpense);



    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(getIncome());
                dispatch(getExpense());
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        if (incomeData && expenseData) {

            const totalIncome = incomeData?.reduce((acc, item) => acc + parseFloat(item.amount) || 0, 0);
            const totalExpenses = expenseData?.reduce((acc, item) => acc + parseFloat(item.amount) || 0, 0);
            const totalBalance = totalIncome - totalExpenses;

            setIncomeTotal(totalIncome);
            setExpenseTotal(totalExpenses);
            setBalance(totalBalance);
        }
    }, [incomeData, expenseData]);
    return (
        <div>
            <h6 className='text-center text-pink-500'>
                Your Balance:
                <span className={`ml-2 ${balance < 0 ? '!text-red-500' : '!text-green-500'} `}>
                    ${balance.toFixed(2)}
                </span>
            </h6>
            <div className='grid grid-cols-2 gap-10 mt-10 w-full pl-5'>
                <div className='border-r-white border-r-[2px] '>
                    <p className='!text-green-500 text-2xl mb-2'>Total Income</p>
                    <p className='!text-green-500'>${incomeTotal.toFixed(2)}</p>
                </div>
                <div>
                    <p className='!text-red-600 text-2xl mb-2'>Total Expenses</p>
                    <p className='!text-red-600'>${expenseTotal.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default TotalComponents;
