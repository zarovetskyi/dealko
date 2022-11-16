import Reviews from './Reviews';


export default function Projects()
{
    window.scrollTo(0,0);

    return (
        <>
        <section className="first_page fp_projects">
            <div className="container flex">
                <div className="projects_first_page_text">
                    <h1 className="big_title">наши проекты</h1>
                    <p className="fp_small_text">За 5 лет работы создание сайтов нам доверило более 300 клиентов из Украины, России, Казахстана, Чехии, Кипра, Германии, Литвы, Латвии, Китая и других стран. Более 80% созданных в веб студии сайтов остаются в Dealko на техническую поддержку , поисковое SEO продвижение и заказывают контекстную рекламу. Яркие лендинги , уникальные сайты-визитки, функциональные интернет-магазины и высоконагруженные корпоративные порталы - вот некоторые сайты наших партнеров, созданием которых мы гордимся.</p>
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
                <h2 className="small_title">наши проекты</h2>
                <div className="our_projects_content flex flex_c">
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Название проекта</p>
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
                    <h2 className="small_title">где заказать сайт?</h2>
                    <p className="discription_text">Конечно же у нас! Dealko станет надёжным партнёром Вашего бизнеса. За нас говорят опыт и выполненные работы, отзывы клиентов и профессионализм сотрудников, погружение в проект и работа на результат.
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