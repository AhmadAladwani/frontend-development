import elem1Image from "../images/elements/Elem 1.png"
import elem2Image from "../images/elements/Elem 2.png"
import elem3Image from "../images/elements/Elem 3.png"
import elem4Image from "../images/elements/Elem 4.png"
import elem5Image from "../images/elements/Elem 5.png"
import elem6Image from "../images/elements/Elem 6.png"
import elem7Image from "../images/elements/Elem 7.png"
import elem8Image from "../images/elements/Elem 8.png"
import elem9Image from "../images/elements/Elem 9.png"
import profilePicture from "../images/elements/Rectangle 34624127.png"

import gitLabLogo from "../images/GitLab.png"
import slackLogo from "../images/Slack.png"
import netflixLogo from "../images/Netflix.png"
import paypalLogo from "../images/Paypal.png"

export default function MainContent() {
    return (
        <>
            <main className="w-full h-full flex flex-col xl:flex-row justify-center items-start bg-blue-600">
                <div className="w-full h-full flex xl:hidden justify-center items-center">
                    <div className="w-1/4 h-full flex justify-end items-center">
                        <div className="h-full grid grid-cols-1 auto-rows-fr">
                            <img src={elem8Image} alt="Element 8" className="row-start-2" />
                            <img src={elem7Image} alt="Element 7" className="row-span-2" />
                            <img src={elem6Image} alt="Element 6" />
                        </div>
                    </div>
                    <div className="w-3/4 h-full py-20 flex justify-start items-center bg-blue-400">
                        <div className="h-full grid grid-cols-3 auto-rows-fr items-start">
                            <img src={elem1Image} alt="Element 1" className="col-span-2" />
                            <img src={elem2Image} alt="Element 2" />
                            <img src={profilePicture} alt="Profile Picture" className="col-span-2 row-span-2" />
                            <img src={elem3Image} alt="Element 3" className="row-span-2" />
                            <img src={elem9Image} alt="Element 9" className="col-span-2" />
                            <img src={elem4Image} alt="Element 4" className="row-span-2" />
                            <img src={elem5Image} alt="Element 5" className="col-span-2" />
                        </div>
                    </div>
                </div>
                <div className="p-10 h-full xl:hidden flex flex-col justify-between items-start gap-20">
                    <div className="h-full flex flex-col justify-center items-start gap-10">
                        <h1 className="text-white">Your Supercharged Design Workflow.</h1>
                        <p className="text-base text-[#B1CCFB]">We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</p>
                        <button className="w-full md:w-auto px-4 py-3 rounded-lg bg-blue-400 text-white">Get Started</button>
                    </div>
                    <div className="w-full space-y-5">
                        <p className="text-white">Who supports us</p>
                        <div className="w-full md:flex md:justify-evenly grid grid-cols-2 justify-center items-center md:gap-0 gap-5">
                            <img src={gitLabLogo} alt="GitLab Logo" />
                            <img src={slackLogo} alt="Slack Logo" />
                            <img src={netflixLogo} alt="Netflix Logo" />
                            <img src={paypalLogo} alt="Paypal Logo" />
                        </div>
                    </div>
                </div>


                <div className="w-4/6 hidden h-full py-20 xl:flex pl-20 justify-between items-center">
                    <div className="max-w-lg flex flex-col justify-center items-start">
                        <div className="flex flex-col justify-center items-start gap-10">
                            <h1 className="text-white">Your Supercharged Design Workflow.</h1>
                            <p className="text-base text-[#B1CCFB]">We’ve been told it is not possible to overachieve our customers’ expectations. We have not reinvented the wheel, we decided to build upon it.</p>
                            <button className="px-4 py-3 rounded-lg bg-blue-400 text-white">Get Started</button>
                        </div>
                        <div className="w-full mt-40 space-y-5">
                            <p className="text-white">Who supports us</p>
                            <div className="w-full flex justify-evenly items-center">
                                <img src={gitLabLogo} alt="GitLab Logo" />
                                <img src={slackLogo} alt="Slack Logo" />
                                <img src={netflixLogo} alt="Netflix Logo" />
                                <img src={paypalLogo} alt="Paypal Logo" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 auto-rows-fr">
                        <img src={elem8Image} alt="Element 8" className="row-start-2" />
                        <img src={elem7Image} alt="Element 7" className="row-span-2" />
                        <img src={elem6Image} alt="Element 6" />
                    </div>
                </div>
                <div className="w-2/6 hidden h-full py-20 xl:flex justify-start items-center bg-blue-400">
                    <div className="h-full grid grid-cols-3 auto-rows-fr items-start">
                        <img src={elem1Image} alt="Element 1" className="col-span-2" />
                        <img src={elem2Image} alt="Element 2" />
                        <img src={profilePicture} alt="Profile Picture" className="col-span-2 row-span-2" />
                        <img src={elem3Image} alt="Element 3" className="row-span-2" />
                        <img src={elem9Image} alt="Element 9" className="col-span-2" />
                        <img src={elem4Image} alt="Element 4" className="row-span-2" />
                        <img src={elem5Image} alt="Element 5" className="col-span-2" />
                    </div>
                </div>
            </main>
        </>
    )
}