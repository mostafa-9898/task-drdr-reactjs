
// component
import CartProduct from '../components/CartProduct';

// react router
import { useNavigate } from 'react-router-dom';

// icon
import { IoIosArrowForward } from 'react-icons/io';
import { useContext } from 'react';

// context
import { CartContext } from '../context/cartContext';


const CartPage = () => {

    const { state } = useContext(CartContext);

    const navigate = useNavigate()
    const goToProduct = () => {
        navigate('/')
    }

    return (
        <>


            {/* --------------- navbar --------------- */}
            <nav className="p-4 bg-slate-300">

                {/* ------ menu button ------ */}
                <div>
                    <IoIosArrowForward size={22}
                        onClick={goToProduct}
                        style={{ cursor: "pointer" }}
                    />
                </div>

            </nav>


            {/* --------------- content --------------- */}
            <section className='px-5 max-h-[600px] min-h-[600px] overflow-auto'>

                {/* ------ header ------ */}
                <header className='py-10'>
                    <h1 className='text-lg font-bold'>سبد خرید</h1>
                </header>


                {/* ------ products list ------ */}
                <section className=''>
                    {state?.selected?.map(item => <CartProduct key={item.id} product={item} />)}
                </section>

            </section>


            {/* --------------- buttons --------------- */}
            <div className='flex gap-6'>
                <button className='w-full py-3 text-lg font-medium text-white bg-purple-800 disabled:opacity-30 rounded-2xl'
                    disabled={state.selected.length < 1}
                >
                    ادامه خرید
                </button>
                <button className='w-full py-3 text-lg font-medium border-2 border-gray-400 disabled:opacity-30 rounded-2xl'
                    disabled={state.selected.length < 1}
                >
                    حذف سبد
                </button>
            </div>
        </>
    );
}

export default CartPage;