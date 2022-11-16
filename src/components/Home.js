import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import OurProjects from './OurProjects';
import Reviews from './Reviews';


export default function Home()
{

    useEffect(() => {
       window.lottieLoad();
	   
	   
    }, []);

	window.scrollTo(0,0);

    return (
        <>
    <section className="first_page first_page_home fp_in">
		<div className="container flex">
			<div className="in_first_page_text">
				<h1 className="big_title">разработка сайтов под ключ <span>любой сложности и объёмов</span></h1>
				<p className="fp_big_text"><b>Dealko</b> - это не просто очередная студия по  созданию и продвижению сайтов, разработке дизайна и приложений.Мы — это команда профессионалов, которая работает с заказчиком как единый механизм, чтобы воплотить любую идею в жизнь.Любим нестандартные приложения и обязательно придумаем оригинальную концепцию индивидуально для вашего бизнеса.</p>
			</div>
			<div className="lottie_wrap">
				<div id="lottie"></div>

			</div>

			
		</div>
		<div className="bubble1"></div>
		<div className="bubble2"></div>
		<div className="bubble3"></div>
		<div className="bubble4"></div>
		<div className="bubble5"></div>
		<div className="bubble6"></div>
	</section>

	<section className="about">
		<div className="container flex flex_m">
			<div className="about_photo"></div>	
			<div className="about_content center">
				<h2 className="small_title">о нас</h2>
				<p className="discription_text">Мы специализируемся на создании сайтов для бизнеса. Мы давно на рынке и хорошо понимаем реалии работы. Мы не просто создаем сайты для различных тематик и целей: от сайтов-визиток и landing page до интернет-магазинов и сложных корпоративных порталов, а также приводим целевых клиентов с помощью поискового продвижения (SEO), контекстной рекламы и раскрутки в социальных сетях (SMM). Сотрудники нашей компании являются квалифицированными специалистами, ценят время и учитывают пожелания наших клиентов, постоянно совершенствуют свои знания и умения...
				</p>
				<button className="white_button">читать больше</button>
			</div>
		</div>
		<div className="bubble44"></div>
	</section>

	<section className="order_site">
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

	<section className="how_work">
		<div className="container">
			<h2 className="small_title center">как мы работаем</h2>
			<div className="how_work_content flex flex_sb">
				<div className="how_work_card flex flex_col flex_m">
					<h5>Подача заявки</h5>
					<div className="letter_and_photo flex flex_m">
						<span>D</span>
						<img src="img/letter_and_photo1.png" alt=""/>
					</div>
					<p className="discription_text center">Заполните форму заявки на сайте</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Обработка заявки</h5>
					<div className="letter_and_photo">
						<span>E</span>
						<img src="img/letter_and_photo2.png" alt=""/>
					</div>
					<p className="discription_text center">Мы позвоним Вам обсудим проект</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Заполнение брифа</h5>
					<div className="letter_and_photo">
						<span>A</span>
						<img src="img/letter_and_photo3.png" alt=""/>
					</div>
					<p className="discription_text center">Мы отправим бриф для заполнения</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Разработка прототипа</h5>
					<div className="letter_and_photo">
						<span>L</span>
						<img src="img/letter_and_photo4.png" alt=""/>
					</div>
					<p className="discription_text center">Разработаем прототип будущего сайта</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Отрисовка дизайна</h5>
					<div className="letter_and_photo">
						<span>K</span>
						<img src="img/letter_and_photo5.png" alt=""/>
					</div>
					<p className="discription_text center">Отрисовка дизайна макета по прототипу</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Вёрстка макета</h5>
					<div className="letter_and_photo">
						<span>O</span>
						<img src="img/letter_and_photo6.png" alt=""/>
					</div>
					<p className="discription_text center">Установка сайта на домен и хостинг</p>
				</div>
			</div>
		</div>	
		<div className="bubble45"></div>	
	</section>

	<section className="services">
		<div className="container flex flex_m flex_sb">
			<div className="services_cards_content flex flex_m flex_sb">
				<div class="services_card">
					<Link to="/development">
						<div class="services_picture s_img1"></div>
						<p>Разработка сайта</p>
					</Link>
				</div>
				
				<div class="services_card">
					<Link to="/design">
						<div class="services_picture s_img2"></div>
						<p>Дизайн и графика</p>
					</Link>
				</div>
				<div class="services_card">
					<Link to="/promotions">
						<div class="services_picture s_img3"></div>
						<p>Продвижение и реклама</p>
					</Link>
				</div>
				<div class="services_card">
					<Link to="/add-services">
						<div class="services_picture s_img4"></div>
						<p>Дополнительные услуги</p>
					</Link>
				</div>
			</div>
			<div className="services_content center">
				<h2 className="small_title">наши услуги</h2>
				<p className="discription_text">Мы оказываем полный спектр услуг по созданию, продвижению и технической поддержке сайтов . Также Вы можете заказать у нас продвижение в социальных сетях, разработку брендбука, 
				фирменного стиля или дизайн логотипа для Вашего бизнеса.
				</p>
				<button className="yellow_button">начать проект</button>
			</div>
		</div>
	</section>

	<section className="cost_calculation">
		<div className="container flex flex_m">
			<div className="cost_calculation_content center">
				<h2 className="small_title">РАСЧЕТ СТОИМОСТИ РАЗРАБОТКИ САЙТА</h2>
				<p className="discription_text">Здесь Вы можете рассчитать предварительную стоимость создания сайта онлайн. Наш калькулятор полностью интерактивен и Вы можете добавлять и исключать нужные компоненты формируя тем самым свой уникальный сайт.
				</p>
			</div>
			<div className="cost_calculation_photo"></div>
		</div>
		<div className="bubble11"></div>
		<div className="bubble12"></div>
		<div className="bubble13"></div>
	</section>

	<section className="first_step">
			<div className="container flex flex_col flex_m">
				<div className="first_step_text flex flex_m">
					<p>Давайте для начала определимся, с какой целью вам нужен сайт и выберем соответствующий ему тип. В зависимости от выбора, будут подобраны соответствующие модули.
					</p>
				</div>
				<div className="cost_cards_content flex flex_c">
					<div className="cost_card purple_card flex flex_col flex_m center">
						<div className="cost_cards_img cc1"></div>
						<h5>сайт визитка</h5>
						<span>12000 грн</span>
						<p className="discription_text">Ваш личный сайт, либо сайт вашего предприятия. Как правило содержит до 8 страниц и форму обратной связи. Функционал сайта можно расширить за счет модулей, добавив фотогалерею и другие.</p>
					</div>
					<div className="cost_card flex flex_col flex_m center">
						<div className="cost_cards_img cc2"></div>
						<h5>сайт портал</h5>
						<span>18000 грн</span>
						<p className="discription_text">Информативный, развлекательный портал, интерактивный блог, либо форум. Этот тип сайта является очень функциональным и позволяет создавать действительно крупные проекты со специфическим функционалом.</p>
					</div>
					<div className="cost_card flex flex_col flex_m center">
						<div className="cost_cards_img cc3"></div>
						<h5>интернет магазин</h5>
						<span>12000 грн</span>
						<p className="discription_text">Продаете товары? Желаете чтобы у вас был их каталог с возможностью покупки онлайн? Все это вам поможет сделать Интернет-магазин. Функционал сайта можно расширить за счет модулей.</p>
					</div>				
				</div>
				<button className="white_button">продолжить</button>
			</div>
			<div className="bubble46"></div>
	</section>

	<section className="purple_price_line">
		<h2>Цена 12000 грн</h2>
	</section>

	<OurProjects />

	<Reviews />


        </>
    )
}