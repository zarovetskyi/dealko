import OurProjects from './OurProjects';


export default function About()
{
    window.scrollTo(0,0);

    return (
        <>
            <section className="first_page fp_about_us">
                <div className="container flex">
                    <div className="about_us_first_page_text fpt">
                        <h1 className="big_title">о нас</h1>
                        <p className="fp_small_text">Мы специализируемся на создании сайтов для бизнеса. Мы давно на рынке и хорошо понимаем реалии работы. Мы создаем сайты для различных тематик и целей:
                        </p>
                        <ul>
                            <li>сайт визитка</li>
                            <li>лендинг пейдж</li>
                            <li>интернет магазин</li>
                            <li>сложный портал</li>
                        </ul>
                        <p className="discription_text">Также приводим целевых клиентов с помощью:</p>
                        <ul>
                            <li>поискового продвижения (SEO)</li>
                            <li>контекстной рекламы</li>
                            <li>раскрутки в социальных сетях (SMM)</li>
                        </ul>
                    </div>
                    <div className="about_us_img "></div>
                </div>
                <div className="bubble1"></div>
                <div className="bubble2"></div>
                <div className="bubble3"></div>
                <div className="bubble4"></div>
                <div className="bubble5"></div>
                <div className="bubble6"></div>
            </section>

            <section className="about_us_information">
                <div className="container flex flex_m flex_c">
                    <div className="about_us_information_img"></div>
                    <div className="about_us_information_text">
                        <p className="discription_text center">
                            Мы децентрализированая компания которая не имеет конкретного офиса и штатных разработчиков мы работаем напрямую с фрилансерами за счёт чего генерируем низкий чек
                        </p>
                        <ul className="flex flex_c">
                            <li><a href="">FACEBOOK</a></li>
                            <li><a href="">INSAGRAM</a></li>
                            <li><a href="">TELEGRAM</a></li>
                        </ul>
                    </div>
                </div>
                <div className="bubble41"></div>
                <div className="bubble42"></div>
            </section>

            <OurProjects />
        </>
    )
}