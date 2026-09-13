import Logo from "../assets/logo-text.png";

export function Footer() {
  return (
  <footer className="mt-25 border-t border-t-[#F1F5F9] ">
<div className="w-full max-w-7xl mx-auto">
        <div className="  py-15 flex ">
      <div className="flex-2 space-y-4">
        <img className="cursor-pointer w-31 h-8 flex-4" src={Logo} alt="Logo" />
        <p className="text-[13px] text-[#64748B] w-110">
          Curated tools, technologies, and resources for developers building
          modern software.
        </p>
        <div className="text-[#475569] text-[13px] font-semibold flex gap-4 mt-2">
          <a href="#" className="">
            GitHub
          </a>
          <a href="#" className="">
            Twitter
          </a>
          <a href="#" className="">
            LinkedIn
          </a>
        </div>
      </div>
      <div className=" text-[13px] flex flex-col flex-1 space-y-4">
        <h6 className=" font-bold  text-[#0F172A]">PRODUCT</h6>
        <a href="#" className="text-[#64748B]">
          Home
        </a>
        <a href="#" className="text-[#64748B]">
          Technologies
        </a>
        <a href="#" className="text-[#64748B]">
          Projects
        </a>
      </div>

      <div className=" text-[13px] flex flex-col flex-1 space-y-4">
        <h6 className=" font-bold  text-[#0F172A]">COMPANY</h6>
        <a href="#" className="text-[#64748B]">
          About
        </a>
        <a href="#" className="text-[#64748B]">
          Contact
        </a>
        <a href="#" className="text-[#64748B]">
          Careers
        </a>
      </div>

      <div className=" text-[13px] flex flex-col flex-1 space-y-4">
        <h6 className=" font-bold  text-[#0F172A]">LEGAL</h6>
        <a href="#" className="text-[#64748B]">
          Privacy Policy
        </a>
        <a href="#" className="text-[#64748B]">
          Terms of Service
        </a>
   
      </div>
      
    </div>
    <div className="text-[#94A3B8] text-[13px] flex justify-between py-7 border-t border-t-[#F1F5F9] mb-3">
      <p>© 2026 Dev Stack. All rights reserved.</p>
    <div className="flex gap-4">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
    </div>
</div>
  </footer>
  );
}
