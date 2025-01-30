import {useState} from 'react';
import {Link} from 'react-router-dom';
import { Search, LogOut, Menu } from 'lucide-react';
import {useAuthStore} from "../store/authUser.js";
import { useContentStore } from '../store/content.js';
const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {user, logout} = useAuthStore();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const {setContentType} = useContentStore();
    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>
            <div className='flex items-center gap-10 z-50'>
                <Link to="https://netflix-clone-black-two.vercel.app/">
                    <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
                </Link>

                {/*desktop navbar items */}
                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to="https://netflix-clone-black-two.vercel.app/" className='hover:underline' onClick={() => setContentType("movie")}>
                        Movies
                    </Link>
                    <Link to="https://netflix-clone-black-two.vercel.app/" className='hover:underline' onClick={() => setContentType("tv")}>
                        Tv Shows
                    </Link>
                    <Link to="https://netflix-clone-black-two.vercel.app/history" className='hover:underline'>
                        Search History
                    </Link>
                </div>
            </div>

            <div className='flex gap-2 items-center z-50'>
                <Link to={"https://netflix-clone-black-two.vercel.app/search"}>
                    <Search className="size-6 cursor-pointer" />
                </Link>
                <img src={user.image} alt="Avatar" className='h-8 rounded cursor-pointer' />
                <LogOut className='size-6 cursor-pointer' onClick={logout} />
            </div>

            <div className='sm:hidden'>
                <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
            </div>

            {/* mobile navbar items */}
            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mtt-4-z-50 bg-black border rounded border-gray-800'>
                    <Link to={"https://netflix-clone-black-two.vercel.app/"}
                        className='block hover:underline p-2'
                        onClick={toggleMobileMenu}
                    >
                        Movies
                    </Link>
                    <Link to={"https://netflix-clone-black-two.vercel.app/"}
                        className='block hover:underline p-2'
                        onClick={toggleMobileMenu}
                    >
                        Tv Shows
                    </Link>
                    <Link to={"https://netflix-clone-black-two.vercel.app/history"}
                        className='block hover:underline p-2'
                        onClick={toggleMobileMenu}
                    >
                        Search History
                    </Link>
                </div>
            )}

        </header>
    )
}

export default Navbar;