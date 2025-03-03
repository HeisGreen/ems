import Navs from './Navs'

const Navbar = () => {
  return (
    <div>
      <header className="bg-gradient-to-b sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-400 p-6">
      <img src="spotify.png" alt="spotify logo" className='w-16 h-16 '/>
      <Navs/>
      </header>
    </div>
  )
}

export default Navbar