import { useEffect } from "react";
import Header from "../Components/Header";
import { ArrowRight, Minus, MoveDown, Play, Star } from "lucide-react";
import CircleInfoHover from "../Components/CircleInfoHover";

const Home = () => {

    useEffect(() => {
        console.log(window.innerWidth, " ", window.innerHeight);
    }, []);
    function giveRingingText(str) {
        const response = str.split("").map((s, i) => {
            return (
                <span key={i} style={{ "--index": i }}>{s}</span>
            );
        });
        return (response);
    }
    return (
        <>
            <Header />
            <section className="hero w-full h-fit xl:h-[100vh] min-h-fit md:min-h-0 p-[4px] sm:p-2 lg:p-4">
                <div className="w-full h-full min-h-fit rounded-[10px] sm:rounded-[20px] md:rounded-[40px] overflow-hidden relative">
                    <video src="./images/videos/hero.mp4" className="w-full h-full object-cover absolute top-0 z-[-1]" autoPlay loop muted disablePictureInPicture disableRemotePlayback aria-disabled />
                    <div className="w-full h-full min-h-fit px-4 py-6 flex flex-col justify-start items-start relative">
                        <div className="w-fit h-[40px] lg:h-[10vh] max-h-[100px] flex justify-center items-center gap-2 md:pl-[20px] lg:pl-[40px]">
                            <img src="./images/logo-light.2bdafc69.svg" alt="logo" width="30px" height="30px" />
                            <h3 className="text-white text-lg font-bold">Awsmd</h3>
                        </div>
                        <div className="hidden lg:flex w-fit h-[40px] lg:h-[50px] absolute top-8 left-[50%] -translate-x-[50%]">
                            <ul className="w-fit flex justify-around items-center h-full bg-[#ffffff] px-[40px] rounded-full gap-x-6 font-semibold">
                                <li className="cursor-pointer text-slider-container h-full flex items-center justify-center">
                                    <span className="text-slider">
                                        <span className="text-slide">About Us</span>
                                        <span className="text-slide">About Us</span>
                                    </span>
                                </li>
                                <li className="cursor-pointer text-slider-container h-full flex items-center justify-center">
                                    <span className="text-slider">
                                        <span className="text-slide">Cases</span>
                                        <span className="text-slide">Cases</span>
                                    </span>
                                </li>
                                <li className="cursor-pointer text-slider-container h-full flex items-center justify-center">
                                    <span className="text-slider">
                                        <span className="text-slide">Reviews</span>
                                        <span className="text-slide">Reviews</span>
                                    </span>
                                </li>
                                <li className="cursor-pointer text-slider-container h-full flex items-center justify-center">
                                    <span className="text-slider">
                                        <span className="text-slide">Contact Us</span>
                                        <span className="text-slide">Contact Us</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full h-[50%] md:h-[70%] min-h-fit flex flex-col justify-end items-start md:px-[20px] lg:px-[40px] mt-10 lg:mt-0 pt-8 md:pt-0">
                            <span className="h-fit">
                                <h1 className="title text-[4rem] sm:text-[6rem] lg:text-[8rem]">We Create</h1>
                            </span>
                            <span className="flex justify-start items-center gap-2 md:gap-8 text-[4rem] sm:text-[6rem] lg:text-[8rem]">
                                <div className="invisible md:visible h-[0.6em] aspect-square  bg-white rounded-full flex justify-center items-center pulse cursor-pointer">
                                    <MoveDown strokeWidth={1} className="cursor-pointer" />
                                </div>
                                <p className="title-italic font-bold ">
                                    Awesome
                                </p>
                            </span>
                            <span className="flex gap-4 md:gap-8 text-[4rem] sm:text-[6rem] lg:text-[8rem]">
                                <h1 className="title font-bold leading-none">Designs</h1>
                                <div className="w-4 h-[1em] bg-[#ffffffaa] animate-myBlink"></div>
                            </span>
                        </div>
                        <div className="w-full h-fit flex justify-start items-center mt-4 gap-4 relative md:px-[20px] lg:px-[40px]">
                            <div className="flex xl:hidden h-[70px] aspect-square bg-white rounded-full text-3xl flex justify-center items-center pulse cursor-pointer">
                                <MoveDown strokeWidth={1} className="cursor-pointer" />
                            </div>
                            <div className="w-full xl:w-[50%] h-[2px] bg-white"></div>
                            <span className="xl:invisible absolute top-0 right-0 h-full w-fit shrink-[0] flex flex-col justify-center items-center text-white"><p>Scroll</p><p>Down</p></span>
                        </div>
                        <div className="group w-full lg:w-[50%] h-fit bg-transparent mt-6 hover:bg-white rounded-full p-2 md:mx-[20px] lg:mx-[40px] transition-all transition-200 flex justify-start items-center flex-row gap-2">
                            <div className="bg-white rounded-full w-fit flex justify-between items-center py-[4px] px-[10px] gap-2 group-hover:bg-black group-hover:text-white transition-all transition-200">
                                <h3 className="font-bold text-sm">C</h3>
                                <span className="flex">
                                    <Star color="#ffd700" fill="#ffd700" size={15} />
                                    <Star color="#ffd700" fill="#ffd700" size={15} />
                                    <Star color="#ffd700" fill="#ffd700" size={15} />
                                    <Star color="#ffd700" fill="#ffd700" size={15} />
                                    <Star color="#ffd700" fill="#ffd700" size={15} />
                                </span>
                                <p className="font-semibold text-sm">4.9</p>
                            </div>
                            <p className="hidden sm:inline text-[#ffffffcc] uppercase group-hover:text-black">Gold verified</p>
                            <p className="w-[200px] sm:w-fit font-semibold text-white group-hover:text-black shrink-0 truncate">Our Customers love to work with us, 37 Reviews</p>
                        </div>
                        <div className="flex xl:hidden w-[70%] sm:w-[300px] mt-4 md:px-[20px] lg:px-[40px]">
                            <div className="w-full h-full relative">
                                <div className="w-full h-full overflow-hidden aspect-video rounded-lg">
                                    <iframe
                                        title="AWSMD Showreel"
                                        className="rounded-xl w-full h-full"
                                        src="https://player.vimeo.com/video/823892274?h=fc36315143&autoplay=1&loop=1&muted=1&autopause=0&background=1&color=ffffff&controls=0&portrait=0&quality=720p"
                                        allow="autoplay; fullscreen;"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="absolute top-[50%] right-0 -translate-y-[50%] translate-x-[50%] z-1 aspect-square">
                                    <div className="w-full h-full bg-[#ffffffbb] rounded-full p-4 group">
                                        <Play color="#000" fill="#000" size={20} />
                                        <div aria-hidden={true} className="absolute top-0 left-0 w-full h-full">
                                            <span className="text-ring" style={{ "--total": "28", "--radius": "40", "--font-size": "1", "--color": "white" }}>
                                                {giveRingingText("click to play click to play")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute invisible xl:visible bottom-8 right-8 w-[400px]">
                            <div className="w-full h-full relative">
                                <div className="w-full h-full overflow-hidden aspect-video rounded-lg">
                                    <iframe
                                        title="AWSMD Showreel"
                                        className="rounded-xl w-full h-full"
                                        src="https://player.vimeo.com/video/823892274?h=fc36315143&autoplay=1&loop=1&muted=1&autopause=0&background=1&color=ffffff&controls=0&portrait=0&quality=720p"
                                        allow="autoplay; fullscreen;"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <div className="absolute top-0 left-0 -translate-y-[50%] -translate-x-[50%] z-1 aspect-square">
                                    <div className="w-full h-full bg-[#ffffffbb] rounded-full p-4 group">
                                        <Play color="#000" fill="#000" size={20} />
                                        <div aria-hidden={true} className="absolute top-0 left-0 w-full h-full">
                                            <span className="text-ring group-hover:text-ring-pause" style={{ "--total": "28", "--radius": "40", "--font-size": "1", "--color": "white" }}>
                                                {giveRingingText("click to play click to play")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full text-[5rem]/[.8] md:text-[7rem]/[.8] lg:text-[10rem]/[.9] font-semibold text-[#2cadfe] relative">
                <div className="marque w-screen" style={{ "--direction": "-1", "--time": "20s" }}>
                    <div className="marque-text">Data driven user focused value based</div>
                    <div className="marque-seperator"></div>
                    <div className="marque-text">Data driven user focused value based</div>
                </div>
            </section>
            <section className="w-full h-fit mt-10 px-[20px] lg:px-8 xl:px-10 text-[1em]">
                <h1 className="text-[#999] text-[1.3rem] flex justify-start items-center gap-[3px] mb-4">01 <Minus /> Our Services</h1>
                <h2 className="text-[#aaa] text-[3.2em]/[1.1] font-sm w-full max-w-[1150px] tracking-tight mb-10">As a tight-knit team of experts, we create memorable and emotional websites, digital experiences, and native apps.</h2>
                <ul className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-y-2">
                    <li className="w-full md:w-[33%] h-fit">
                        <div className="w-full h-fit relative bg-[#e4e3df] rounded-lg overflow-hidden">
                            <img src="./images/mob-dev.png" alt="Development" className="relative top-0 left-0 w-full h-full aspect-square animate-grow" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center px-[4px] py-[6px] md:p-2 lg:p-4 xl:p-6">
                                <div className="w-full h-full flex flex-col justify-between pt-2 pb-4">
                                    <h1 className="text-[2rem]/[1] xl:text-[3rem]/[1] text-white font-semibold uppercase">Mobile App Development</h1>
                                    <p className="text-white font-normal text-[0.9rem]/[1.1] lg:text-[1.1rem]/[1.1] xl:text-[1.2rem]/[1.1] tracking-wide h-fit min-h-[30%] flex justify-start items-start">Many years of expertise in mobile development allow us to design architecture and create bespoke native applications for Apply iOS and Google Android with the latest and in-demand technologies.</p>
                                </div>
                                <div className="w-full h-[2px] bg-white my-[4px] md:my-2 lg:my-4 rounded-full"></div>
                                <div className="w-full h-fit">
                                    <ul className="w-full h-full flex justify-start items-start flex-wrap gap-[4px]">
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Swift</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">React Native</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Flutter JS</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Kotlin</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="w-full md:w-[33%] h-fit">
                        <div className="w-full h-fit relative bg-[#f1ae86] rounded-lg overflow-hidden">
                            <img src="./images/design-solutions.png" alt="Development" className="relative top-0 left-0 w-full h-full aspect-square animate-grow" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center px-[4px] py-[6px] md:p-2 lg:p-4 xl:p-6">
                                <div className="w-full h-full flex flex-col justify-between pt-2 pb-4">
                                    <h1 className="text-[2rem]/[1] xl:text-[3rem]/[1] text-white font-semibold uppercase">Solid Design Solutions</h1>
                                    <p className="text-white font-normal text-[0.9rem]/[1.1] lg:text-[1.1rem]/[1.1] xl:text-[1.2rem]/[1.1] tracking-wide h-fit min-h-[30%] flex justify-start items-start overflow-hidden text-ellipsis">We're driven by user-centered design that drives productivity and increase revenue. Our expertise and ingenuity are remarkable, yet we always try to outdo and outperform our previous achievements.</p>
                                </div>
                                <div className="w-full h-[2px] bg-white my-[4px] md:my-2 lg:my-4 rounded-full"></div>
                                <div className="w-full h-fit">
                                    <ul className="w-full h-full flex justify-start items-start flex-wrap gap-[4px]">
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Figma</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Adobe AfterEffects</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Adobe Illustrator</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Blender</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Cinema 4D</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="w-full md:w-[33%] h-fit">
                        <div className="w-full h-fit relative bg-[#9086d0] rounded-lg overflow-hidden">
                            <img src="./images/web-dev.png" alt="Development" className="relative top-0 left-0 w-full h-full aspect-square animate-grow" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center px-[4px] py-[6px] md:p-2 lg:p-4 xl:p-6">
                                <div className="w-full h-full flex flex-col justify-between pt-2 pb-4">
                                    <h1 className="text-[1.5rem]/[1] md:text-[2rem]/[1] xl:text-[3rem]/[1] text-white font-semibold uppercase">Web Development</h1>
                                    <p className="text-white font-normal text-[0.9rem]/[1.1] lg:text-[1.1rem]/[1.1] xl:text-[1.2rem]/[1.1] tracking-wide h-fit min-h-[30%] flex justify-start items-start">Our adaptive design components are built using perfectly structured and readable code. We make sure that the development solutions are well-optimized and work flawlessly across devices and browsers.</p>
                                </div>
                                <div className="w-full h-[2px] bg-white my-[4px] md:my-2 lg:my-4 rounded-full"></div>
                                <div className="w-full h-fit">
                                    <ul className="w-full h-full flex justify-start items-start flex-wrap gap-[4px]">
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">React JS</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Node JS</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">Vue JS</li>
                                        <li className="cursor-pointer hover:scale-125 px-4 text-white font-light whitespace-nowrap rounded-full bg-[#ffffff66] transition-all duration-300">WebFlow</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="w-full h-fit mt-10 px-[20px] lg:px-8 xl:px-10 text-[1em] mt-20">
                <h1 className="text-[#999] text-[1.3rem] flex justify-start items-center gap-[3px] mb-4">02 <Minus /> About Us</h1>
                <div className="w-full h-fit flex justify-between items-center">
                    <h2 className="text-[3.2em]/[1.1] font-medium capitalize w-full max-w-[1150px] tracking-tight mb-10">We strive to innovate</h2>
                    <span
                        className="invisible sm:visible relative rounded-full bg-[#e1e1e1] text-md font-sans font-normal px-6 py-2 cursor-pointer group overflow-hidden flex justify-center items-center text-slider-container z-[12]"
                    >
                        <span className="filler z-0 absolute top-0 -left-[100%] w-full h-full bg-black group-hover:left-0 rounded-full transition-all duration-300 ease-in-out"></span>
                        <span className="relative z-10 group-hover:text-white text-slider w-fit">
                            <span className="text-slide">Become a Client</span>
                            <span className="text-slide">Become a Client</span>
                        </span>
                        <span className="relative z-10 group-hover:text-white transition-all duration-300 ease-in-out flex items-center h-full"><ArrowRight />&nbsp;</span>
                    </span>
                </div>
                <div className="w-full h-[20px] border-[1px] border-solid border-[#a1a1a188] border-b-transparent"></div>
                <div className="w-full flex flex-row h-fit justify-center lg:justify-between items-center pt-[50px]">
                    <div className="w-full md:w-[50%] md:min-w-[520px] h-fit flex flex-col justify-center md:justify-start items-start gap-y-[50px]">
                        <h1 className="text-[#9b9b9b] text-xl"><span className="text-black">Solid Strategy</span> aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights</h1>
                        <div className="w-full">
                            <h1 className="text-[#9b9b9b] text-lg font-semibold mb-[20px]">Some numbers about us</h1>
                            <div className="w-full h-fit flex justify-center md:justify-start items-center">
                                <div className="grid grid-cols-[250px] grid-rows-[repeat(4,200px)] md:grid-cols-[repeat(2,250px)] md:grid-rows-[repeat(2,200px)] place-items-center gap-2" style={{ fontFamily: "monospace" }}>
                                    <div className="w-full h-full aspect-square bg-[#f2f0f0] rounded-[30px] overflow-hidden relative">
                                        <video className="absolute w-[100px] h-[100px] aspect-square bottom-0 right-0 scale-150 translate-x-[15%] translate-y-[10%]" src="./images/videos/volchek-color.mp4" autoPlay muted playsinline loop disablePictureInPicture disableRemotePlayback aria-disabled />
                                        <div className="relative z-1 w-[80%] h-fit p-4">
                                            <h1 className="text-[3rem] font-bold">+300</h1>
                                            <p className="font-light text-sm text-[#9b9b9b]">We have successfully completed 300+ projects.</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full aspect-square bg-[#f2f0f0] rounded-[30px] overflow-hidden relative">
                                        <video className="absolute w-[100px] h-[100px] aspect-square bottom-0 right-0 scale-150 translate-x-[15%] translate-y-[10%]" src="./images/videos/pruzina-color.mp4" autoPlay muted loop playsinline disablePictureInPicture disableRemotePlayback aria-disabled />
                                        <div className="relative z-1 w-[80%] h-fit p-4">
                                            <h1 className="text-[3rem] font-bold">100K</h1>
                                            <p className="font-light text-sm text-[#9b9b9b]">We’ve gathered dozens of reviews from the clients and + 100k reviews from their users</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full aspect-square bg-[#f2f0f0] rounded-[30px] overflow-hidden relative">
                                        <video className="absolute w-[100px] h-[100px] aspect-square bottom-0 right-0 scale-150 translate-x-[15%] translate-y-[10%]" src="./images/videos/time-color.mp4" autoPlay muted loop playsinline disablePictureInPicture disableRemotePlayback aria-disabled />
                                        <div className="relative z-1 w-[80%] h-fit p-4">
                                            <h1 className="text-[3rem] font-bold">+10</h1>
                                            <p className="font-light text-sm text-[#9b9b9b]">Years of Experience</p>
                                        </div>
                                    </div>
                                    <div className="w-full h-full aspect-square bg-[#f2f0f0] rounded-[30px] overflow-hidden relative">
                                        <video className="absolute w-[100px] h-[100px] aspect-square bottom-0 right-0 scale-150 translate-x-[15%] translate-y-[10%]" src="./images/videos/ball-color.mp4" autoPlay muted loop playsinline disablePictureInPicture disableRemotePlayback aria-disabled />
                                        <div className="relative z-1 w-[80%] h-fit p-4">
                                            <h1 className="text-[3rem] font-bold">+280</h1>
                                            <p className="font-light text-sm text-[#9b9b9b]">Team members all over the world</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:inline-block h-[400px] md:h-[500px] lg:h-[600px] w-[400px] md:w-[500px] lg:w-[600px] aspect-sqaure h-[600px] relative">
                        <div className="absolute aspect-sqaure z-[0] w-[100%] h-[100%] top-0 right-0 bg-[rgb(244,244,244)] rounded-full top-0 right-0">
                        </div>
                        <CircleInfoHover
                            texts={["Growth", "Optimization", "Experiments", "", "A/B Testing"]}
                            mainIndex={0}
                            className="w-[85.4%] h-[85.4%] top-[2.13812%] right-[2.13812%]"
                            bg="rgb(238,238,238)"
                            zIndex={1}
                        />

                        <CircleInfoHover
                            texts={["Insight", "Innovations", "User Experience", "Visual Design", "", "Development"]}
                            mainIndex={0}
                            className="w-[68.14%] h-[68.14%] top-[4.66579%] right-[4.66579%]"
                            bg="rgb(225,225,225)"
                            zIndex={2}
                        />

                        <CircleInfoHover
                            texts={["Product", "UX Strategy", "UX Research", "", "Data Science"]}
                            mainIndex={0}
                            className="w-[42%] h-[42%] top-[8.4939%] right-[8.4939%]"
                            bg="rgb(244,244,244)"
                            zIndex={3}
                        />

                    </div>
                </div>
            </section>
            <section className="w-full mt-10">
                <div className="marque w-screen overflow-hidden flex" style={{ "--direction": "-1", "--time": "20s" }}>
                    <ul className="marque-text w-fit flex justify-start items-center">
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/uber.png" alt="Uber" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/oracle.png" alt="Oracle" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/gofundme.png" alt="GoFundMe" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/nutanix.png" alt="NutaniX" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/upside.png" alt="Upside" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/intel.png" alt="Intel" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/newbalance.png" alt="NewBalance" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/statefarm.png" alt="StateFarm" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/crosslead.png" alt="CrossLead" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/voldis.png" alt="Voldis" className="w-full object-contain h-full" /></li>
                    </ul>
                    <ul className="marque-text w-fit flex justify-start items-center">
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/uber.png" alt="Uber" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/oracle.png" alt="Oracle" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/gofundme.png" alt="GoFundMe" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/nutanix.png" alt="NutaniX" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/upside.png" alt="Upside" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/intel.png" alt="Intel" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/newbalance.png" alt="NewBalance" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/statefarm.png" alt="StateFarm" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/crosslead.png" alt="CrossLead" className="w-full object-contain h-full" /></li>
                        <li className="inline-block w-[260px] h-[180px] border-[2px] border-solid shrink-0 p-16"><img src="./images/companies/voldis.png" alt="Voldis" className="w-full object-contain h-full" /></li>
                    </ul>
                </div>
            </section>
            <section className="w-full ">
                <div className="w-full h-fit bg-[#0d0f11] relative px-[20px] lg:px-8 xl:px-10 pt-10 pb-10">
                    <div className="w-full h-fit flex flex-row p-4">
                        <h1 className="w-full md:w-[80%] h-fit text-[2.5rem]/[0.9] md:text-[5rem]/[1] uppercase text-white flex flex-col"><span>{"{"}SMART{"}"}</span><span>Development</span></h1>
                        <h1 className="hidden md:inline-block md:w-[20%] h-fit text-[10rem]/[1] text-[#ffffff66]">**</h1>
                    </div>
                    <div className="h-fit w-full relative flex justify-center items-center z-[4] py-4">
                        <div className="w-fit h-full relative z-2 translate-x-[10%] -translate-y-[10%]">
                            <img src="./images/phone-01.png" alt="" className="w-full max-w-[350px] object-contain animate-float" />
                        </div>
                        <div className="w-fit h-full relative z-2 -translate-x-[10%] translate-y-[10%]">
                            <img src="./images/phone-02.png" alt="" className="w-full max-w-[350px] object-contain animate-float-opposite" />
                        </div>
                    </div>
                    <div className="w-full h-fit flex justify-between items-center pb-40">
                        <h3 className="hidden md:inline-block w-[40%] text-white text-[1.4rem]/[1]">Making your Business outstanding is a science. We take it (a) seriously and (b) creatively.</h3>
                        <div className="w-fit flex gap-x-4 text-[1.1rem]/[1]">
                            <button className="w-fit px-4 py-2 rounded-full bg-[#ffffff]">Check Our Portfolio</button>
                            <button className="w-fit px-4 py-2 rounded-full bg-[#ffffff44] text-white">Get In Touch</button>
                        </div>
                    </div>
                    <div className="absolute top-[50%] left-0 right-0 -translate-y-[50%] marque w-full text-[10rem]/[1] text-[#ffffff11] justify-end" style={{ "--direction": "+1", "--time": "20s" }}>
                        <div className="marque-text">Data driven user focused value based</div>
                        <div className="marque-seperator"></div>
                        <div className="marque-text">Data driven user focused value based</div>
                    </div>
                    <svg className="absolute left-0 top-0" viewBox="0 0 1728 1101" fill="none" stroke="#ffffff22" xmlns="http://www.w3.org/2000/svg"><path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{ "stroke-dasharray": "3246.53, 0" }}></path></svg>
                </div>
            </section>
            <section>
                <div className="w-full min-h-[250vh] bg-[#0d0f11] relative">
                    <div className="absolute top-0 left-0 w-screen h-fit grid grid-cols-1 grid-rows-3 gap-8">
                        <div className="w-full flex justify-center items-center flex-row gap-4 overflow-hidden">
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen1-1.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen1-2.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen1-3.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen1-4.png" alt="" /></div>
                        </div>
                        <div className="w-full flex justify-center items-center flex-row gap-4 overflow-hidden">
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen2-1.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen2-2.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen2-3.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen2-4.png" alt="" /></div>
                        </div>
                        <div className="w-full flex justify-center items-center flex-row gap-4 overflow-hidden">
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen3-1.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen3-2.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen3-3.png" alt="" /></div>
                            <div className="rounded-3xl overflow-hidden w-[120px] md:w-[20%] shrink-0"><img src="./images/phone screens/screen3-4.png" alt="" /></div>
                        </div>
                    </div>
                    <div className="w-full h-fit flex justify-center items-start sticky top-0 left-0 z-[5]">
                        <img src="./images/hand.png" alt="" className="relative w-[250px] md:w-[450px] object-cover" />
                        <div className="w-[150px] md:w-[15%] absolute top-0 left-[50%] -translate-x-[50%] z-[4]">
                            <video src="./images/videos/phone.mp4" autoPlay muted playsInline loop disablePictureInPicture disableRemotePlayback aria-disabled/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default Home;