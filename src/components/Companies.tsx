import theVergeLogo from "../images/companies/The Verge Logo.png"
import slackLogo from "../images/companies/Slack Logo.png"
import googleLogo from "../images/companies/Google Logo.png"
import payPalLogo from "../images/companies/PayPal Logo.png"
import pinterestLogo from "../images/companies/Pinterest Logo.png"
import mailchimpLogo from "../images/companies/Mailchimp Logo.png"
import check from "../images/companies/check.png"

export default function Companies() {
    return (
        <section className="p-10 flex flex-col justify-center items-center gap-5">
            <h1>Proud to Be Used By</h1>
            <p>Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
            <div className="w-full h-full p-10 flex flex-col md:grid md:grid-cols-4 xl:flex xl:flex-row justify-evenly items-center gap-10 xl:gap-0">
                <img src={theVergeLogo} alt="The Verge Logo" />
                <img src={slackLogo} alt="Slack Logo" />
                <img src={googleLogo} alt="Google Logo" />
                <img src={payPalLogo} alt="PayPal Logo" />
                <img src={pinterestLogo} alt="Pinterest Logo" className="md:col-start-2" />
                <img src={mailchimpLogo} alt="Mailchimp Logo" className="md:col-start-3" />
            </div>
            <div className="p-5 md:p-10 bg-gray-200 flex flex-col justify-center items-center gap-5">
                <p className="text-blue-600 font-bold">1% OF THE INDUSTRY</p>
                <h1>Welcome to your new digital reality that will rock your world truly at all throughout.</h1>
                <div className="p-5 w-full h-full box-border flex flex-col md:flex-row justify-center items-center">
                    <input id="email" name="email" type="email" placeholder="Enter your email" className="w-full md:w-1/2 h-full px-4 py-3 shadow-xl border border-gray-400 rounded-lg md:rounded-r-none md:rounded-l-lg" />
                    <button className="w-full md:w-auto px-[18px] py-3 bg-blue-600 text-white rounded-lg md:rounded-r-lg md:rounded-l-none">Submit</button>
                </div>
                <div className="px-10 md:px-0 w-full md:w-1/2 grid grid-cols-2 md:flex justify-center md:justify-around items-center place-items-start gap-5 md:gap-0">
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="Check" className="p-1 bg-blue-600 rounded-full" />
                        <p className="text-black">Fully Secure</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="Check" className="p-1 bg-blue-600 rounded-full" />
                        <p className="text-black">24/7 Support</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="Check" className="p-1 bg-blue-600 rounded-full" />
                        <p className="text-black">Done Deal</p>
                    </div>
                </div>
            </div>
        </section>
    )
}