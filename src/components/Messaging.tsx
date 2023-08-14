import icon1 from "../images/icons/Icon 1.png"
import icon2 from "../images/icons/Icon 2.png"
import icon3 from "../images/icons/Icon 3.png"
import icon4 from "../images/icons/Icon 4.png"
import icon5 from "../images/icons/Icon 5.png"
import icon6 from "../images/icons/Icon 6.png"
import rightArrow from "../images/icons/right.png"
import photo1 from "../images/Photo 1.png"
import photo2 from "../images/Photo 2.png"
import icon7 from "../images/icons/Icon 7.png"
import icon8 from "../images/icons/Icon 8.png"
import icon9 from "../images/icons/Icon 9.png"
import companyLogo from "../images/Company Logo 2.png"
import avatar from "../images/Avatar.png"

export default function Messaging() {
    return (
        <section>
            <div className="p-10 flex flex-col justify-center items-center gap-5">
                <h1>Messaging for all</h1>
                <p>User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 justify-start items-center gap-10">
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon1} alt="Icon 1" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Easier Work Organization</h2>
                        <p>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon2} alt="Icon 2" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Streamlined Processes</h2>
                        <p>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon3} alt="Icon 3" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Marketing Analytics</h2>
                        <p>Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon4} alt="Icon 4" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Fast Connection</h2>
                        <p>Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon5} alt="Icon 5" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Easier Integrations</h2>
                        <p>Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start gap-2">
                        <img src={icon6} alt="Icon 6" className="p-1 bg-blue-600 rounded-full" />
                        <h2>Workflow Builder</h2>
                        <p>Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas.</p>
                        <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                    </div>
                </div>
            </div>
            <div className="py-10 flex flex-col justify-center items-center gap-5">
                <div className="px-10 flex flex-col justify-center items-center gap-5">
                    <h1>Redefining Product Features</h1>
                    <p>Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>
                </div>
                <div className="p-10 flex flex-col xl:flex-row-reverse justify-evenly items-center gap-10">
                    <img src={photo1} alt="Photo 1" className="xl:hidden" />
                    <img src={photo2} alt="Photo" className="hidden xl:block" />
                    <div className="flex flex-col justify-start items-center gap-10">
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon7} alt="Icon 7" className="p-1 bg-blue-600 rounded-full" />
                            <h2>Explore ideas together</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon8} alt="Icon 8" className="p-1 bg-blue-600 rounded-full" />
                            <h2>Bring those ideas to life</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon9} alt="Icon 9" className="p-1 bg-blue-600 rounded-full" />
                            <h2>Ship better outcomes</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                    </div>
                </div>
                <div className="w-full p-20 bg-gray-950 flex flex-col xl:flex-row justify-evenly items-center">
                    <img src={photo1} alt="Photo 1" className="min-h-full" />
                    <div className="flex flex-col justify-start items-center gap-10">
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon7} alt="Icon 7" className="p-1 bg-blue-600 rounded-full" />
                            <h2 className="text-white">Explore ideas together</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon8} alt="Icon 8" className="p-1 bg-blue-600 rounded-full" />
                            <h2 className="text-white">Bring those ideas to life</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                        <div className="w-full flex flex-col justify-center items-start gap-2">
                            <img src={icon9} alt="Icon 9" className="p-1 bg-blue-600 rounded-full" />
                            <h2 className="text-white">Ship better outcomes</h2>
                            <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                            <button className="flex justify-center items-center gap-2 text-blue-600">Learn more <img src={rightArrow} alt="Right Arrow" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-10 flex flex-col justify-center items-center gap-10 xl:hidden">
                <h1>What Our Customers Say</h1>
                <p>Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win strategies to ensure domination.</p>
            </div>
            <div className="m-16">
                <div className="px-4 md:px-8 xl:px-40 py-4 md:py-8 bg-gray-200 flex flex-col justify-center items-start md:items-center gap-4 md:gap-8">
                    <img src={companyLogo} alt="Company Logo" />
                    <h2>Thank you for making it painless, pleasant and most of all hassle free! I love LookScout. I can't say enough about LookScout. Great job, I will definitely be ordering again!</h2>
                    <div className="flex justify-center items-center gap-3">
                        <img src={avatar} alt="Avatar" className="rounded-full" />
                        <div>
                            <p className="text-black">Lisa Smith</p>
                            <p>CEO Company</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}