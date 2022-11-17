import OurProjects from './OurProjects';


export default function About()
{
    window.scrollTo(0,0);

    return (
        <>
            <section className="first_page fp_about_us">
                <div className="container flex">
                    <div className="about_us_first_page_text fpt">
                        <h1 className="big_title">про нас</h1>
                        <p className="fp_small_text">Ми спеціалізуємося на розробці сайтів для бізнесу. Ми давно на ринку та добре розуміємо реалії роботи. Ми створюємо сайти для різних тематик та цілей:
                        </p>
                        <ul>
                            <li>сайт-візитка</li>
                            <li>лендинг пейдж</li>
                            <li>інтернет-магазин</li>
                            <li>складний портал</li>
                        </ul>
                        <p className="discription_text">Також наводимо цільових клієнтів за допомогою:</p>
                        <ul>
                            <li>пошукового просування (SEO)</li>
                            <li>контекстної реклами</li>
                            <li>розкрутки у соціальних мережах (SMM)</li>
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
                            Ми децентралізована компанія яка не має конкретного офісу та штатних розробників ми працюємо безпосередньо з фрілансерами за рахунок чого генеруємо низький чек
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