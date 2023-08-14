import companyLogoImage from "../images/Company Logo 1.png"
import chevronDownImage from "../images/chevron down.png"
import burgerMenuImage from "../images/big.png"

export default function Navbar() {
    return (
        <nav className="px-5 xl:px-16 py-5 bg-blue-600 text-white flex justify-between items-center">
            <div className="w-4/5 flex justify-start items-center">
                <img src={companyLogoImage} alt="Company Logo" />
                <div className="hidden w-full xl:flex justify-evenly items-center">
                    <p className="text-base text-white">Home</p>
                    <p className="text-base text-white">Our Products</p>
                    <div className="flex justify-center items-center gap-3">
                        <p className="text-base text-white">Resources</p>
                        <img src={chevronDownImage} alt="Chevron Down" />
                    </div>
                    <p className="text-base text-white">Contacts</p>
                </div>
            </div>
            <div className="w-1/5 flex justify-end items-center gap-10">
                <img className="xl:hidden" src={burgerMenuImage} alt="Burger Menu" />
                <button className="hidden xl:block">Log in</button>
                <button className="hidden xl:block bg-blue-400 px-5 py-3 rounded-lg">Sign up</button>
            </div>
        </nav>
    )
}