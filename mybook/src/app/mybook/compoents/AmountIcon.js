import { updatesingleIcon } from "@/app/redux/reducers/counter";
import { updateSingleIcon } from "@/app/redux/reducers/singleIconSlice";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";



const AmountIcon = ({ item }) => {
    const intialAmount = useRef(item.amount)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(intialAmount.current);

    const handleAmount = (type, id) => {
        console.log(id);
        if (type === 'increment') {
            setAmount(prevAmount => prevAmount + intialAmount.current);

        } else {
            if (amount !== 0) {
                setAmount(prevAmount => prevAmount - intialAmount.current);

            }
        }
        dispatch(updateSingleIcon({ id, amount }))
    }





    return (
        <>
            <div className='w-24  text-3xl hover:bg-gray-200 dark:hover:bg-[#91565663] rounded-full  h-24 border-dashed border-2 p-2'>
                <img className='w-full h-full  rounded-full' src={item?.icon ? item.icon : "/assets/images/shirt.png"} alt="" />
                {/* <img className='w-full h-full  rounded-full' src={item.icon ? item.icon : "/assets/images/shirt.png"} alt="" /> */}
                <span className='absolute right-0 text-[12px] w-8 h-8 text-center bg-gray-200 dark:bg-[#915656] shadow-lightmode dark:shadow-customshadow rounded-full -top-4'>{item.qly}</span>
            </div>
            <p className='pl-3 text-sm text-center max-w-[100px] text-ellipsis overflow-hidden'>{item.name}</p>
            <p className='text-sm text-center'>{amount}</p>
            <div className='flex items-center justify-center gap-5 my-3'>
                <button onClick={() => handleAmount("increment", item._id)} className='w-[30px] shadow-lightmode dark:shadow-customshadow rounded-lg text-3xl dark:active:shadow-lightmodeclick active:shadow-buttonclick'>
                    +
                </button>
                <button onClick={() => handleAmount('decrement', item._id)} className='w-[30px] shadow-lightmode dark:shadow-customshadow rounded-lg text-3xl dark:active:shadow-lightmodeclick active:shadow-buttonclick'>
                    -
                </button>
            </div>
        </>
    )
}

export default AmountIcon