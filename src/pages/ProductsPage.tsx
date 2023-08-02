import { useContext } from "react";

// component
import Product from "../components/Product";

// react router
import { useNavigate } from "react-router-dom";

// icons
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

// react query
import { useQuery, UseQueryResult } from "@tanstack/react-query";

// services
import { getProducts } from "../services/requests/products";

// types
import { IProdcut } from '../types/product';

// context
import { CartContext } from "../context/cartContext";


const ProductsPage = () => {

    const { state } = useContext(CartContext)

    const navigate = useNavigate()
    const cartHandler = () => {
        navigate('/cart')
    }

    // fetch all the products
    const { data, isLoading, isError }: UseQueryResult<IProdcut[]> = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    if (isLoading) return <h2>Loading...</h2>
    if (isError) return <p>Something maybe wrong please try again after 2 minutes</p>

    return (
        <>
            {/* --------------- navbar --------------- */}
            <nav className="flex justify-between p-4 bg-slate-300 ">

                {/* ------ menu button ------ */}
                <div>
                    <GiHamburgerMenu size={22} />
                </div>

                {/* ------ cart button ------ */}
                <div className='relative cursor-pointer' onClick={cartHandler}>
                    <FaShoppingCart size={22} />
                    <div className='absolute top-[-7px] right-[-8px] bg-purple-900
                    w-4 h-4 rounded-[50%] flex items-center justify-center
                '>
                        <span className='text-xs text-white'>{state.selected.length}</span>
                    </div>
                </div>

            </nav>


            {/* --------------- content --------------- */}
            <section className="p-5 min-h-[600px] flex flex-col justify-between">

                {data?.map((item) => <Product key={item.id} product={item} />)}

                <button className="w-full py-4 text-xl font-normal text-white bg-purple-800 rounded-xl"
                    onClick={cartHandler}
                >
                    تکمیل خرید
                </button>

            </section>
        </>
    );
}

export default ProductsPage;