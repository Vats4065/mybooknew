"use client"
import React, { useEffect, useState } from 'react'
import Tooltip from '../../compoents/Tooltip'
import CenterModel from '../../compoents/models/CenterModel'
import { useDispatch, useSelector } from 'react-redux';
// import { deletesingleIcon, incrementQlysingIcon, decrementQlysingIcon } from '../../../store/features/counter'
import { toast } from 'react-toastify';
import { getSingleIcon, removeSingleIcon, updateSingleIcon } from '@/app/redux/reducers/singleIconSlice';

import AccountIcon from "@/app/mybook/compoents/AmountIcon"


function IconItem() {
    const dispatch = useDispatch();
    const [isOpenModel, setIsOpenModel] = useState(false);
    let [modeltype, setModeltype] = useState()
    const data = useSelector((state) => state?.singleIcon?.singleIcon)

    const testfn = (id) => {
        setModeltype('remove'),
            dispatch(removeSingleIcon(id)),
            dispatch(getSingleIcon())
        toast("delect income data!")
    }
    const addnew = () => {
        setIsOpenModel(true);
        setModeltype('singleicon')
    }




    useEffect(() => {
        dispatch(getSingleIcon())
    }, [dispatch])


    return (
        <>
            <div className='min-h-[500px] mx-auto mt-10'>
                <div className='flex flex-wrap justify-center md:justify-normal md:gap-x-14 gap-[20px]'>
                    <div onClick={addnew} className='w-24 grid place-content-center text-3xl hover:bg-gray-200 dark:hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2'>
                        +
                    </div>
                    {data && data.map((item) => {

                        return (
                            <Tooltip text={'remove'} tp={'0px'} fn={() => testfn(item.id)}>
                                <AccountIcon item={item} />
                            </Tooltip>

                        )
                    })}

                </div>
            </div >

            <CenterModel isOpenModel={isOpenModel} setIsOpenModel={setIsOpenModel} modeltype={modeltype} />
        </>
    )
}

export default IconItem