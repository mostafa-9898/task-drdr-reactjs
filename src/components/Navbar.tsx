import { useNavigate } from 'react-router-dom';

// icons
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';


const Navbar = () => {

    const navigate = useNavigate()

    const cartHandler = () => {
        navigate('/cart')
    }

    return (
        <nav className="flex justify-between p-4 bg-slate-300 ">

            {/* ---------- cart ---------- */}
            <div className='relative cursor-pointer' onClick={cartHandler}>
                <FaShoppingCart size={22} />
                <div className='absolute top-[-7px] right-[-8px] bg-purple-900
                    w-4 h-4 rounded-[50%] flex items-center justify-center
                '>
                    <span className='text-xs text-white'>2</span>
                </div>
            </div>

            {/* ---------- menu ---------- */}
            <div>
                <GiHamburgerMenu size={22} />
            </div>

        </nav>
    );
}

export default Navbar;