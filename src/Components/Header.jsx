import { Star, Copy, Facebook, Instagram, Twitter } from "lucide-react";
import "../styles/header.css";
import { useEffect, useRef } from "react";

const Header = () => {
    const menuOpenBtnRef = useRef(null);
    const menuOpenFieldRef = useRef(null);
    const menuRef = useRef(null);
    const leftMenuRef = useRef(null);
    const rightMenuRef = useRef(null);
    const menuImgRef = useRef(null);
    const becomeClientBtnRef = useRef(null);
    const languageRef = useRef(null);

    useEffect(() => {
        const handleMenuToggle = () => {
            const open = menuOpenFieldRef.current.checked;

            const leftInner = leftMenuRef.current.querySelector(".menu-inner");
            const rightInner = rightMenuRef.current.querySelector(".menu-inner");

            if (open) {
                menuRef.current.classList.remove("pointer-events-none");
                menuRef.current.classList.add("pointer-events-auto");
                // expand menus
                leftMenuRef.current.classList.remove("scale-y-0");
                leftMenuRef.current.classList.add("scale-y-100");

                rightMenuRef.current.classList.remove("scale-y-0");
                rightMenuRef.current.classList.add("scale-y-100");

                menuOpenBtnRef.current.querySelectorAll("span")[0].classList.remove("w-[40%]","translate-x-[30%]");
                menuOpenBtnRef.current.querySelectorAll("span")[2].classList.remove("w-[50%]", "-translate-x-[30%]");
                menuOpenBtnRef.current.querySelectorAll("span")[0].classList.add("w-[100%]","translate-x-[0%]","rotate-[30deg]");
                menuOpenBtnRef.current.querySelectorAll("span")[1].classList.add("opacity-0");
                menuOpenBtnRef.current.querySelectorAll("span")[2].classList.add("w-[100%]", "-translate-x-[0%]","-rotate-[30deg]");

                // show inner content with delay
                setTimeout(() => {
                    leftInner.classList.remove("opacity-0", "translate-y-4");
                    leftInner.classList.add("opacity-100", "translate-y-0");

                    rightInner.classList.remove("opacity-0", "translate-y-4");
                    rightInner.classList.add("opacity-100", "translate-y-0");
                    
                    menuImgRef.current.classList.remove('opacity-0');
                    menuImgRef.current.classList.add('opacity-100');
                }, 300); // wait until container starts expanding
            } else {
                menuRef.current.classList.add("pointer-events-none");
                menuRef.current.classList.remove("pointer-events-auto");
                menuImgRef.current.classList.add('opacity-0');
                menuImgRef.current.classList.remove('opacity-100');
                // hide inner content first
                leftInner.classList.remove("opacity-100", "translate-y-0");
                leftInner.classList.add("opacity-0", "translate-y-4");

                rightInner.classList.remove("opacity-100", "translate-y-0");
                rightInner.classList.add("opacity-0", "translate-y-4");

                
                menuOpenBtnRef.current.querySelectorAll("span")[0].classList.add("w-[40%]","translate-x-[30%]");
                menuOpenBtnRef.current.querySelectorAll("span")[1].classList.remove("opacity-0");
                menuOpenBtnRef.current.querySelectorAll("span")[2].classList.add("w-[50%]", "-translate-x-[30%]");
                menuOpenBtnRef.current.querySelectorAll("span")[0].classList.remove("w-[100%]","translate-x-[0%]","rotate-[30deg]");
                menuOpenBtnRef.current.querySelectorAll("span")[2].classList.remove("w-[100%]", "-translate-x-[0%]","-rotate-[30deg]");

                // then collapse container after text finishes animating
                setTimeout(() => {
                    leftMenuRef.current.classList.remove("scale-y-100");
                    leftMenuRef.current.classList.add("scale-y-0");

                    rightMenuRef.current.classList.remove("scale-y-100");
                    rightMenuRef.current.classList.add("scale-y-0");
                }, 400);
            }
        };

        menuOpenFieldRef.current.onchange = handleMenuToggle;
        window.addEventListener('scroll',(e)=>{
            const filler = becomeClientBtnRef.current.querySelector(".filler");
            if(window.scrollY > window.innerHeight){
                filler.classList.remove("-left-[100%]");
                filler.classList.add("left-0");
                becomeClientBtnRef.current.classList.add("text-white");
                becomeClientBtnRef.current.classList.remove("bg-white");
                menuOpenBtnRef.current.classList.remove("bg-[#ffffff66]");
                menuOpenBtnRef.current.classList.add("bg-blue-600");
                languageRef.current.classList.remove("border-[#ffffff66]");
                languageRef.current.classList.add("border-blue-600");
                languageRef.current.classList.remove("text-white");
                languageRef.current.classList.add("text-blue-600");
            }else{
                filler.classList.add("-left-[100%]");
                filler.classList.remove("left-0");
                becomeClientBtnRef.current.classList.remove("text-white");
                becomeClientBtnRef.current.classList.add("bg-white");
                menuOpenBtnRef.current.classList.add("bg-[#ffffff66]");
                menuOpenBtnRef.current.classList.remove("bg-blue-600");
                languageRef.current.classList.add("border-[#ffffff66]");
                languageRef.current.classList.remove("border-blue-600");
                languageRef.current.classList.remove("text-blue-600");
                languageRef.current.classList.add("text-white");
            }
        })
    }, []);

    return (
        <header className="w-fit xl:h-[10vh] min-h-[66px] max-h-[100px] mt-4 md:mt-8 lg:mt-10 fixed top-0 right-0 flex justify-end items-center z-20">
            <nav className="w-fit h-full flex justify-end items-center gap-4 px-4 lg:px-8">
                <span ref={becomeClientBtnRef}
                    className="invisible sm:visible relative rounded-full bg-white text-lg font-sans font-normal px-6 py-2 cursor-pointer group overflow-hidden flex justify-center items-center text-slider-container z-[12]"
                >
                    <span className="filler z-0 absolute top-0 -left-[100%] w-full h-full bg-blue-600 group-hover:left-0 rounded-full transition-all duration-300 ease-in-out"></span>
                    <span className="relative z-10 group-hover:text-white transition-all duration-300 ease-in-out">+&nbsp;</span>
                    <span className="relative z-10 group-hover:text-white text-slider">
                        <span className="text-slide">Become a Client</span>
                        <span className="text-slide">Become a Client</span>
                    </span>
                </span>
                <span ref={languageRef}
                    className="border-2 border-solid border-[#ffffff66] px-4 py-2 rounded-xl relative z-[12]  text-white"
                >
                    <select 
                        className="outline-none border-none bg-transparent text-lg font-bold"
                    >
                        <option value="en" className="border-none outline-none">EN</option>
                        <option value="cn">CN</option>
                    </select>
                </span>
                <input ref={menuOpenFieldRef} type="checkbox" id="menutoggle" hidden />
                <label ref={menuOpenBtnRef} htmlFor="menutoggle" className="group rounded-full w-[50px] h-[50px] aspect-square bg-[#ffffff66] flex flex-col justify-center items-center gap-[4px] cursor-pointer relative z-[12] p-2">
                    <span className="w-[40%] h-[3px] bg-white rounded-lg relative translate-x-[30%] origin-left transition-all duration-300"></span>
                    <span className="w-[100%] h-[5px] bg-white rounded-lg transition-all duration-300"></span>
                    <span className="w-[50%] h-[3px] bg-white rounded-lg relative -translate-x-[30%] origin-left transition-all duration-300"></span>
                </label>

                {/* Menu */}
                <div ref={menuRef} className="flex fixed top-0 left-0 w-full h-full max-h-fit overflow-hidden pointer-events-none">
                    <div className="w-full h-full max-h-fit relative flex flex-col-reverse lg:flex-row">
                        <img ref={menuImgRef} src="./images/logo-light.2bdafc69.svg" alt="logo"
                            className="opacity-0 absolute top-8 left-4 lg:top-10 lg:left-10 w-[40px] lg:w-[70px] h-[40px] lg:h-[70px] z-10 transition-all duration-300 ease-in-out"
                        />
                        {/* LEFT MENU */}
                        <div ref={leftMenuRef} className="bg-[#4541f1] lg:bg-[#2722df] w-full lg:w-[25%] h-[0%] lg:h-full scale-y-0 flex flex-col justify-start lg:justify-end items-center transition-transform duration-700 ease-in-out origin-top overflow-hidden">
                            <div className="menu-inner opacity-0 translate-y-4 transition-all duration-500 ease-in-out">
                                <span className="flex flex-col justify-center items-start gap-y-4 mb-4 lg:p-8">
                                    <span className="flex justify-between items-center gap-4">
                                        <img src="./images/clutchco.png" alt="Clutch.Co" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
                                        <span className="flex flex-col justify-center items-start gap-[4px]">
                                            <span className="flex gap-x-[4px]">
                                                <Star color="#ffffff" fill="#ffffff" size={15} />
                                                <Star color="#ffffff" fill="#ffffff" size={15} />
                                                <Star color="#ffffff" fill="#ffffff" size={15} />
                                                <Star color="#ffffff" fill="#ffffff" size={15} />
                                                <Star color="#ffffff" fill="#ffffff" size={15} />
                                            </span>
                                            <p className="text-white text-sm">Gold Verified, 22 reviews</p>
                                        </span>
                                    </span>
                                    <p className="hidden lg:inline text-sm text-[#ffffffdd] font-sans">Awesome design for awesome businesses</p>
                                </span>
                            </div>
                        </div>

                        {/* RIGHT MENU */}
                        <div ref={rightMenuRef} className="bg-[#4541f1] w-full lg:w-[75%] h-[100%] lg:h-full scale-y-0 flex flex-col lg:flex-row transition-transform duration-700 ease-in-out overflow-hidden origin-bottom">
                            <div className="menu-inner opacity-0 translate-y-4 transition-all duration-500 ease-in-out w-full lg:w-[100%] flex flex-col lg:flex-row">
                                <div className="w-full lg:w-[70%] h-fit lg:h-full flex flex-col justify-start items-start p-2 mt-20 lg:mt-0 lg:p-10">
                                    <p className="hidden lg:inline text-[#ffffffaa] h-[10%]">Navigation</p>
                                    <ul className="w-full h-fit lg:h-[90%] flex flex-col justify-start items-start">
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                Home
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">01</span>
                                            </span>
                                        </li>
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                Our Services
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">02</span>
                                            </span>
                                        </li>
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                About Us
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">03</span>
                                            </span>
                                        </li>
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                Portfolio
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">04</span>
                                            </span>
                                        </li>
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                Reviews
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">05</span>
                                            </span>
                                        </li>
                                        <li className="w-fit flex justify-start items-center text-[2em]/[1.3] lg:text-[4em]/[1.1] text-white font-semibold group gap-2">
                                            <span className="grid w-0 group-hover:w-20 invisible group-hover:visible h-[10px] bg-[#ffffff00] group-hover:bg-[#ffffff] transition-all duration-300 ease-in-out"></span>
                                            <span className="relative">
                                                Contact Us
                                                <span className="text-[0.2em] text-[#ffffff77] absolute top-[25%] right-0 translate-x-[100%]">06</span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full h-fit lg:w-[30%] lg:h-full flex justiy-between items-center lg:items-end p-2 lg:pb-10">
                                    <div className="flex flex-col justify-between items-start gap-8 p-2">
                                        <div className="flex flex-col">
                                            <a className="text-[1.1rem] lg:text-[2rem]/[1.1] text-bold text-white">Whatsapp</a>
                                            <a className="text-[1.1rem] lg:text-[2rem]/[1.1] text-bold text-white">Telegram</a>
                                            <span className="flex items-center gap-2 text-[0.8rem] lg:text-[1.3rem]">
                                                <a href="mailto:info@awsmd.com" className="text-[#ffffffaa] underline">info@aswmd.com</a>
                                                <span className="p-2 rounded-full bg-[#ffffff66] aspect-square cursor-pointer"><Copy color="#fff" width="15px" height="15px" /></span>
                                            </span>
                                        </div>
                                        <div className="hidden lg:block">
                                            <h1 className="text-white">Privacy Policy and Cookies</h1>
                                            <h2 className="text-white">@Awsmd 2025</h2>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex flex-row lg:flex-col justify-center items-center gap-2">
                                            <span className="p-2 aspect-square bg-[#ffffff77] rounded-full cursor-pointer">
                                                <Facebook color="#fff" />
                                            </span>
                                            <span className="p-2 aspect-square bg-[#ffffff77] rounded-full cursor-pointer">
                                                <Instagram color="#fff" />
                                            </span>
                                            <span className="p-2 aspect-square bg-[#ffffff77] rounded-full cursor-pointer">
                                                <Twitter color="#fff" />
                                            </span>
                                        </div>
                                        <span className="lg:hidden flex flex-col justify-center items-start gap-y-4 mb-4 lg:p-8">
                                            <span className="flex justify-between items-center gap-4">
                                                <img src="./images/clutchco.png" alt="Clutch.Co" className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]" />
                                                <span className="flex flex-col justify-center items-start gap-[4px]">
                                                    <span className="flex gap-x-[4px]">
                                                        <Star color="#ffffff" fill="#ffffff" size={15} />
                                                        <Star color="#ffffff" fill="#ffffff" size={15} />
                                                        <Star color="#ffffff" fill="#ffffff" size={15} />
                                                        <Star color="#ffffff" fill="#ffffff" size={15} />
                                                        <Star color="#ffffff" fill="#ffffff" size={15} />
                                                    </span>
                                                    <p className="text-white text-sm">Gold Verified, 22 reviews</p>
                                                </span>
                                            </span>
                                            <p className="hidden lg:inline text-sm text-[#ffffffdd] font-sans">Awesome design for awesome businesses</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;
