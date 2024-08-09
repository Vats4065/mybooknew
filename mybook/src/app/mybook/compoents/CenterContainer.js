"use client"
import React, { useEffect, useState } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import Tooltip from './Tooltip'
import CenterModel from './models/CenterModel'
import TabButton from './TabButton'
import { useDispatch, useSelector } from 'react-redux'
// import { deleteIncome, deleteExpanse } from '../../store/features/counter'
import { toast } from 'react-toastify'
import axios from 'axios'
// import { deleteExpense, deleteIncome, getExpanse, getIncome } from '@/app/service/api'
// import { deleteExpanse } from '@/app/store/features/counter'
// import AddForm from './AddForm'

import { getExpense, removeExpense } from '@/app/redux/reducers/customInputExpenseSlice'
import { getIncome, removeIncome } from '@/app/redux/reducers/customInputIncomeSlice'





function CenterContainer() {
    const dispatch = useDispatch();
    const [shawData, setShawData] = useState([])
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selctEditId, setSelctEditId] = useState();
    const [selectbtn, setselectbtn] = useState(0)
    const [modeltype, setModeltype] = useState();


    let data = selectbtn === 0 ? useSelector(state => state?.income?.inputIncome) : useSelector(state => state?.expense?.inputexpense)




    const testfn = (id) => {

        setIsOpenModel(true)
        setModeltype('edit')
        setSelctEditId(id)
    }

    const rendomColor = ["red", "green", "blue", "#c3c388"]

    const removeItem = (id) => {
        try {
            if (selectbtn === 0) {

                dispatch(removeIncome(id));
                dispatch(getIncome())
                toast.success('Income removed successfully');
            } else {

                dispatch(removeExpense(id));
                dispatch(getExpense())
                toast.success('Expense removed successfully');
            }
        } catch (error) {
            toast.error('Error removing item');
        }
    };





    useEffect(() => {
        const fetchData = () => {
            try {
                if (selectbtn === 0) {
                    dispatch(getIncome());
                } else {
                    dispatch(getExpense());
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [selectbtn, dispatch]);


    useEffect(() => {
        setShawData(data)
    }, [data, dispatch])





    return (
        <>
            <TabButton selectbtn={selectbtn} setselectbtn={setselectbtn} />
            <div className='flex flex-col gap-3 mt-5 h-[500px] overflow-auto'>


                {shawData && shawData?.map((item, index) => {
                    const backgroundColor = rendomColor[index % rendomColor.length];
                    return (
                        <>
                            <Tooltip text={'Edit'} rt={true} fn={() => testfn(item.id)} tp={'-10px'}>
                                <div className='rounded-md p-2 shadow-lightmodeclick dark:shadow-buttonclick flex items-center justify-between z-10'>
                                    <div className='flex items-center gap-4 sm:gap-10'>
                                        {
                                            item.icon ?
                                                <img src={item.icon}
                                                    style={{ backgroundColor }}
                                                    className='w-12 p-0 h-12  rounded-full' />
                                                :
                                                <p className='w-12 p-1 h-12  rounded-full grid place-content-center font-bold text-2xl capitalize' style={{ backgroundColor }}>
                                                    {item?.name?.charAt(0)}
                                                </p>
                                        }

                                        <p className='text-lg text-white text-ellipsis line-clamp-1 w-[150px] overflow-hidden sm:w-[250px]'>{item.name}</p>
                                        <p className='text-green-500'>${item?.amount}</p>
                                    </div>
                                    <RiCloseLargeFill onClick={() => removeItem(item._id)} className='text-[26px] min-w-[20px]  text-white active:scale-90' />
                                </div>
                            </Tooltip>
                        </>
                    )
                })}

            </div>

            <CenterModel isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} modeltype={modeltype} selctEditId={selctEditId} selectbtn={selectbtn} />

        </>
    )
}

export default CenterContainer