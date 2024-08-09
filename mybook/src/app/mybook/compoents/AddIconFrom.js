"use client"
import React, { lazy, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addIncome, addExpanse, deletecustomIconincome, deletecustomIconexpnse } from '../../redux/reducers/counter'
import { toast } from 'react-toastify';
import { getIconIncome, removeIconIncome } from '@/app/redux/reducers/customIconIncome';
import { getIconExpense, removeIconExpense } from '@/app/redux/reducers/customIconExpense';
import { createIncome } from '@/app/redux/reducers/customInputIncomeSlice';
import { createExpense } from '@/app/redux/reducers/customInputExpenseSlice';

const Tooltip = lazy(() => import('./Tooltip'))
const CenterModel = lazy(() => import('./models/CenterModel'))




function AddIconFrom() {
    const [isOpenModel, setIsOpenModel] = useState(false);
    const [selectbtn, setselectbtn] = useState(0)
    const [showdata, setShowdata] = useState();
    const [modeltype, setModeltype] = useState('')
    const dispatch = useDispatch();
    const data = selectbtn === 0 ? useSelector((state) => state?.iconIncome?.iconIncome) : useSelector((state) => state?.iconExpense?.iconExpense);

    // useEffect(() => {
    //     selectbtn == 0 ? setShowdata(incomeIcons) : setShowdata(expanseIcons)

    // }, [selectbtn, incomeIcons, expanseIcons])

    useEffect(() => {
        const fetchData = () => {
            try {
                if (selectbtn === 0) {
                    dispatch(getIconIncome())
                }
                else {
                    dispatch(getIconExpense())
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [selectbtn, dispatch])

    useEffect(() => {
        setShowdata(data)
    }, [data, dispatch])



    const handlingadditem = (item) => {


        let data = {
            icon: item.icon,
            name: item.name,
            amount: item.amount,
        }
        selectbtn == 0 ?
            (dispatch(createIncome(data))) :
            (dispatch(createExpense(data)))

    }


    const testfn = (id) => {

        selectbtn === 0 ?
            (dispatch(removeIconIncome(id)), dispatch(getIconIncome()), toast("Edit income icon data!")) :
            (dispatch(removeIconExpense(id)), dispatch(getIconExpense()), toast("Edit expanse icon data!"));
    }



    return (
        <>
            <div className='flex items-center gap-4'>
                <button onClick={() => setselectbtn(0)} className={`min-h-[50px]  w-full rounded-lg text-white font-bold ${selectbtn == 0 ? "shadow-lightmodeclick dark:shadow-buttonclick" : "shadow-lightmode dark:shadow-customshadow"} `}>
                    income
                </button>
                <button onClick={() => setselectbtn(1)} className={`min-h-[50px]  w-full rounded-lg text-white font-bold ${selectbtn == 1 ? "shadow-lightmodeclick dark:shadow-buttonclick" : "shadow-lightmode dark:shadow-customshadow"} `}>
                    expense
                </button>
            </div>
            <div className='flex flex-wrap gap-4  mt-5'>
                <div onClick={() => { setIsOpenModel(true), setModeltype('add') }} className='w-24 grid place-content-center text-3xl hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2'>
                    +
                </div>
                {showdata?.map((item) => {
                    return (
                        <Tooltip text={'remove'} fn={() => testfn(item?._id)}>
                            <div onClick={() => handlingadditem(item)}>
                                <div className='w-24  text-3xl hover:bg-gray-200 dark:hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2 p-2'>
                                    <img className='w-full h-full  rounded-full' src={item.icon ? item.icon : "/assets/images/shirt.png"} alt="" />
                                </div>
                                <p className='pl-3 text-sm'>Icon Name</p>
                            </div>
                        </Tooltip>
                    )
                })}

            </div>
            <CenterModel isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} selectbtn={selectbtn} modeltype={modeltype} />
        </>

    )
}

export default AddIconFrom