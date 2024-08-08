import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { createExpense } from '@/app/redux/reducers/customInputExpenseSlice';
import { createIncome } from '@/app/redux/reducers/customInputIncomeSlice';

function AddForm() {
    const [name, setName] = useState("")
    const [amount, setAmount] = useState()

    const [selectbtn, setselectbtn] = useState(0)
    const dispatch = useDispatch();



    const handlingAdd = async () => {
        if (selectbtn === 0) {
            dispatch(createIncome({ name, amount }))
            toast("Add income data!")
        }
        else {
            dispatch(createExpense({ name, amount }))
            toast("Add expanse data!")
        }

        setAmount("")
        setName("")


        // nameref.current.value = ''
        // amountref.current.value = ''


    }

    return (
        <div>
            <div className='flex items-center gap-4'>
                <button onClick={() => setselectbtn(0)} className={`min-h-[50px]  w-full rounded-lg text-white font-bold ${selectbtn == 0 ? "shadow-lightmodeclick dark:shadow-buttonclick" : "shadow-lightmode dark:shadow-customshadow"} `}>
                    income
                </button>
                <button onClick={() => setselectbtn(1)} className={`min-h-[50px]  w-full rounded-lg text-white font-bold ${selectbtn == 1 ? "shadow-lightmodeclick dark:shadow-buttonclick" : "shadow-lightmode dark:shadow-customshadow"} `}>
                    expense
                </button>
            </div>

            <div className='w-full p-[24px] shadow-lightmode  dark:shadow-customshadow mt-5 rounded-lg'>
                <h6>income Name:-</h6>
                <input value={name} onChange={(e) => setName(e.target.value)} className='w-full mt-2 focus:outline-none bg-transparent shadow-lightmodeclick dark:shadow-buttonclick p-[5px_10px] rounded-md' type='text' />
                {/* ref={nameref} onKeyDown={(e) => e.key == 'Enter' && amountref.current.focus()} */}
                {/* ref={amountref} onKeyDown={(e) => e.key == 'Enter' && (handlingAdd(), nameref.current.focus())} */}
                <h6 className='mt-5'>Amount:-</h6>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} className='w-full mt-2 focus:outline-none bg-transparent shadow-lightmodeclick dark:shadow-buttonclick p-[5px_10px] rounded-md' type='number' />
                <button onClick={handlingAdd} className='min-h-[50px] shadow-lightmode  dark:shadow-customshadow w-full px-10 mt-5 rounded-lg text-white font-bold active:shadow-lightmodeclick  dark:active:shadow-buttonclick'>
                    Add
                </button>
            </div>

        </div>
    )
}

export default AddForm