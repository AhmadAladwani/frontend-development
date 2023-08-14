import companyLogo from "../images/footer/Company Logo.png"
import facebookLogo from "../images/footer/Facebook.png"
import googleLogo from "../images/footer/Google.png"
import appleLogo from "../images/footer/Apple.png"
import instagramLogo from "../images/footer/Instagram.png"

export default function Footer() {
    return (
        <footer className="p-5 md:p-10 bg-gray-950 divide-yx divide-gray-800">
            <div className="md:hidden p-5 flex flex-col justify-center items-start gap-5">
                <img src={companyLogo} alt="Company Logo" />
                <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                <div className="w-full grid grid-cols-2 justify-center items-center gap-5">
                    <p className="text-white font-bold mb-3">Resources</p>
                    <p className="text-white font-bold mb-3">Products</p>
                    <p className="font-bold">Community</p>
                    <p className="font-bold">Integrations</p>
                    <p className="font-bold">Events</p>
                    <p className="font-bold">Solutions</p>
                    <p className="font-bold">Help Center</p>
                    <p className="font-bold">Features</p>
                    <p className="font-bold">Partners</p>
                    <p className="font-bold">Enterprise</p>
                </div>
                <p className="text-white">Get Email Notifications</p>
                <p>Generate outside the box thinking with the possibility to targtet the low</p>
                <div className="w-full flex justify-center items-center">
                    <input id="email" name="email" type="email" placeholder="Enter email..." className="w-full px-4 py-3 bg-gray-600 rounded-l-lg" />
                    <button className="px-4 py-3 bg-blue-600 text-white font-bold rounded-r-lg">Submit</button>
                </div>
                <div className="w-full py-5 flex flex-col justify-center items-center border-t border-gray-800 gap-10">
                    <p className="text-[#5F6D7E]">&#169; 2023 Lookscout. All Rights Reserved.</p>
                    <div className="w-full flex justify-evenly items-center">
                        <img src={facebookLogo} alt="Facebook" />
                        <img src={googleLogo} alt="Google" />
                        <img src={appleLogo} alt="Apple" />
                        <img src={instagramLogo} alt="Instagram" />
                    </div>
                </div>
            </div>

            <div className="hidden xl:hidden w-full p-5 md:grid grid-cols-2 justify-center items-start gap-10">
                <div className="flex flex-col justify-center items-start gap-5">
                    <img src={companyLogo} alt="Company Logo" />
                    <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <p className="text-white">Get Email Notifications</p>
                    <p>Generate outside the box thinking with the possibility to targtet the low</p>
                    <div className="w-full flex justify-center items-center">
                        <input id="email" name="email" type="email" placeholder="Enter email..." className="w-full px-4 py-3 bg-gray-600 rounded-l-lg" />
                        <button className="px-4 py-3 bg-blue-600 text-white font-bold rounded-r-lg">Submit</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <p className="text-white font-bold mb-3">Resources</p>
                    <p className="font-bold">Community</p>
                    <p className="font-bold">Events</p>
                    <p className="font-bold">Help Center</p>
                    <p className="font-bold">Partners</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <p className="text-white font-bold mb-3">Products</p>
                    <p className="font-bold">Integrations</p>
                    <p className="font-bold">Solutions</p>
                    <p className="font-bold">Features</p>
                    <p className="font-bold">Enterprise</p>
                </div>
            </div>

            <div className="hidden p-10 w-full xl:grid grid-cols-4 justify-center items-center">
                <div className="flex flex-col justify-center items-start gap-5">
                    <img src={companyLogo} alt="Company Logo" />
                    <p>Generate outside the box thinking with the possibility to targtet the low.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-white font-bold mb-3">Resources</p>
                    <p className="font-bold">Community</p>
                    <p className="font-bold">Events</p>
                    <p className="font-bold">Help Center</p>
                    <p className="font-bold">Partners</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <p className="text-white font-bold mb-3">Products</p>
                    <p className="font-bold">Integrations</p>
                    <p className="font-bold">Solutions</p>
                    <p className="font-bold">Features</p>
                    <p className="font-bold">Enterprise</p>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <p className="text-white">Get Email Notifications</p>
                    <p>Generate outside the box thinking with the possibility to targtet the low</p>
                    <div className="w-full flex justify-center items-center">
                        <input id="email" name="email" type="email" placeholder="Enter email..." className="w-full px-4 py-3 bg-gray-600 rounded-l-lg" />
                        <button className="px-4 py-3 bg-blue-600 text-white font-bold rounded-r-lg">Submit</button>
                    </div>
                </div>
            </div>

            <div className="hidden py-5 md:flex justify-between items-center border-t border-gray-800">
                <p>&#169; 2023 Lookscout. All Rights Reserved.</p>
                <div className="flex justify-center items-center gap-10">
                    <img src={facebookLogo} alt="Facebook" />
                    <img src={googleLogo} alt="Google" />
                    <img src={appleLogo} alt="Apple" />
                    <img src={instagramLogo} alt="Instagram" />
                </div>
            </div>
        </footer>
    )
}