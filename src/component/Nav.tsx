import Logo from '../assets/logo-text.png'

export default function Nav() {
  
  return (
<nav className='border-b border-[#47556910] sticky top-0 z-50 bg-white'>
      <div className='flex justify-between w-full max-w-7xl mx-auto items-center py-6 '>
      <img className='cursor-pointer' src={Logo} alt="Logo" />

      <ul className='flex gap-7'>
        <li className='text-[#DB2777] font-semibold'><a href="#home" >Home</a></li>
        <li className='text-[#475569] font-semibold'><a href="#technologies" >Technologies</a></li>
        <li className='text-[#475569] font-semibold'><a href="#projects" >Projects</a></li>
        <li className='text-[#475569] font-semibold'><a href="#about" >About</a></li>
        <li className='text-[#475569] font-semibold'><a href="#contact">Contact</a></li>
      </ul>

      <div className='flex gap-1 items-center'>
        <a className='btn btn-ghost rounded-full hover:bg-[#B8166B] hover:text-white font-semibold text-[#334155]' href="#sign-in">Sign In</a><a className='btn rounded-full bg-[#D91B7E] text-white hover:bg-[#B8166B] font-semibold ' href="#sign-up">Sign Up</a>
      </div>
    </div>
</nav>
  )
}