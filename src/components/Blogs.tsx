import photo1 from "../images/blogs/Rectangle 1.png"
import photo2 from "../images/blogs/Rectangle 2.png"
import photo3 from "../images/blogs/Rectangle 3.png"
import avatar1 from "../images/blogs/Avatar 1.png"
import avatar2 from "../images/blogs/Avatar 2.png"
import avatar3 from "../images/blogs/Avatar 3.png"

export default function Blogs() {
    return (
        <section className="p-10 flex flex-col justify-center items-center gap-5">
            <h1>Latest Blog Posts</h1>
            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.</p>
            <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-10">
                <div className="flex flex-col justify-center items-start gap-5">
                    <img src={photo1} alt="Photo 1" />
                    <h2>Generate social with the aim to take this offline.</h2>
                    <p>Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.</p>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">
                            <img src={avatar1} alt="Avatar 1" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black">Lisa Stark</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-5">
                    <img src={photo2} alt="Photo 2" />
                    <h2>Generate social with the aim to take this offline.</h2>
                    <p>Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.</p>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">
                            <img src={avatar2} alt="Avatar 2" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black">Lisa Stark</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-start space-y-5 md:hidden xl:block">
                    <img src={photo3} alt="Photo 3" />
                    <h2>Generate social with the aim to take this offline.</h2>
                    <p>Synchronising scrum masters with the possibility to surprise and delight to the surprise and delight scrum masters.</p>
                    <div className="w-full flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">
                            <img src={avatar3} alt="Avatar 3" />
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-black">Lisa Stark</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <p>25 Apr</p>
                    </div>
                </div>
            </div>
        </section>
    )
}