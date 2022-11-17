import Reviews from './Reviews';


export default function Projects()
{
    window.scrollTo(0,0);

    return (
        <>
        <section className="first_page fp_projects">
            <div className="container flex">
                <div className="projects_first_page_text">
                    <h1 className="big_title">наші проекти</h1>
                    <p className="fp_small_text">Яскраві лендинги, унікальні сайти-візитки, функціональні інтернет-магазини та високонавантажені корпоративні портали – ось деякі сайти наших партнерів, створенням яких ми пишаємося.</p>
                </div>
                <div className="projects_img"></div>
            </div>
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
            <div className="bubble4"></div>
            <div className="bubble5"></div>
            <div className="bubble6"></div>
        </section>

        <section className="our_projects">
            <div className="container flex flex_col flex_m">
                <h2 className="small_title">наші проекти</h2>
                <div className="our_projects_content flex flex_c">
                     <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Betonko</p>
                            </a>
                        </div>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOKKPPOjcalfmPDgR_WJjEmwvWCMdkBe6dPZoqA=s1360-w1360-h1020" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Techniko</p>
                            </a>
                        </div>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipPGA40LBMqnJ4R8m0aeXpdO1UPEGOg0TCXjQYuC=s1360-w1360-h1020" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>SportStore55</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Назва проекту</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Назва проекту</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Назва проекту</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="bubble14"></div>
            <div className="bubble15"></div>
            <div className="bubble16"></div>
        </section>

        <Reviews />


        <section className="order_site order_site_pr">
            <div className="container flex flex_m flex_c">
                <div className="order_site_content center">
                    <h2 className="small_title">де замовити сайт?</h2>
                    <p className="discription_text">Звісно ж у нас! Dealko стане надійним партнером вашого бізнесу. За нас говорять досвід та виконані роботи, відгуки клієнтів та професіоналізм співробітників, занурення у проект та робота на результат.
                    </p>
                </div>
                <div className="order_site_photo"></div>
            </div>
            <div className="bubble8"></div>
            <div className="bubble9"></div>
            <div className="bubble10"></div>	
        </section>

       
        </>
    )
}