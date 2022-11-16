import { Link } from 'react-router-dom';

import OurProjects from './OurProjects';

export default function Services()
{
	window.scrollTo(0,0);

    return (
        <>
            <section class="first_page fp_our_services">
		<div class="container flex">
			<div class="or_first_page_text">
				<h1 class="big_title">наши услуги</h1>
				<p class="fp_small_text">Веб студия «Dealko» занимается изготовлением, доработкой, обслуживанием и технической поддержкой сайтов с 2015 года и за это время реализовала не один десяток успешных проектов. Для разработки сайта мы используем современный дизайн, адаптивную вёрстку, удобные системы управления сайтом (CMS)</p>
			</div>
			<div class="our_services_img"></div>
		</div>
		<div class="bubble1"></div>
		<div class="bubble2"></div>
		<div class="bubble3"></div>
		<div class="bubble4"></div>
		<div class="bubble5"></div>
		<div class="bubble6"></div>
	</section>

	<section class="how_work">
		<div class="container">
			<h2 class="small_title center">как мы работаем</h2>
			<div class="how_work_content flex flex_sb">
				<div class="how_work_card flex flex_col flex_m">
					<h5>Подача заявки</h5>
					<div class="letter_and_photo flex flex_m">
						<span>D</span>
						<img src="img/letter_and_photo1.png" alt=""/>
					</div>
					<p class="discription_text center">Заполните форму заявки на сайте</p>
				</div>
				<div class="how_work_card flex flex_col flex_m">
					<h5>Обработка заявки</h5>
					<div class="letter_and_photo">
						<span>E</span>
						<img src="img/letter_and_photo2.png" alt=""/>
					</div>
					<p class="discription_text center">Мы позвоним Вам обсудим проект</p>
				</div>
				<div class="how_work_card flex flex_col flex_m">
					<h5>Заполнение брифа</h5>
					<div class="letter_and_photo">
						<span>A</span>
						<img src="img/letter_and_photo3.png" alt=""/>
					</div>
					<p class="discription_text center">Мы отправим бриф для заполнения</p>
				</div>
				<div class="how_work_card flex flex_col flex_m">
					<h5>Разработка прототипа</h5>
					<div class="letter_and_photo">
						<span>L</span>
						<img src="img/letter_and_photo4.png" alt=""/>
					</div>
					<p class="discription_text center">Разработаем прототип будущего сайта</p>
				</div>
				<div class="how_work_card flex flex_col flex_m">
					<h5>Отрисовка дизайна</h5>
					<div class="letter_and_photo">
						<span>K</span>
						<img src="img/letter_and_photo5.png" alt=""/>
					</div>
					<p class="discription_text center">Отрисовка дизайна макета по прототипу</p>
				</div>
				<div class="how_work_card flex flex_col flex_m">
					<h5>Вёрстка макета</h5>
					<div class="letter_and_photo">
						<span>O</span>
						<img src="img/letter_and_photo6.png" alt=""/>
					</div>
					<p class="discription_text center">Установка сайта на домен и хостинг</p>
				</div>
			</div>
		</div>
		<div class="bubble45"></div>
	</section>

	<section class="services">
		<div class="container flex flex_m flex_sb">
			<div class="services_cards_content flex flex_m flex_sb">
				
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
			<div class="services_content center">
				<h2 class="small_title">наши услуги</h2>
				<p class="discription_text">Мы оказываем полный спектр услуг по созданию, продвижению и технической поддержке сайтов . Также Вы можете заказать у нас продвижение в социальных сетях, разработку брендбука, 
				фирменного стиля или дизайн логотипа для Вашего бизнеса.
				</p>
				<button class="yellow_button">начать проект</button>
			</div>
		</div>
	</section>

	<section class="cost_calculation">
		<div class="container flex flex_m">
			<div class="cost_calculation_content center">
				<h2 class="small_title">РАСЧЕТ СТОИМОСТИ РАЗРАБОТКИ САЙТА</h2>
				<p class="discription_text">Здесь Вы можете рассчитать предварительную стоимость создания сайта онлайн. Наш калькулятор полностью интерактивен и Вы можете добавлять и исключать нужные компоненты формируя тем самым свой уникальный сайт.
				</p>
			</div>
			<div class="cost_calculation_photo"></div>
		</div>
		<div class="bubble11"></div>
		<div class="bubble12"></div>
		<div class="bubble13"></div>
	</section>

	<section class="first_step">
			<div class="container flex flex_col flex_m">
				<div class="first_step_text flex flex_m">
					<p>Давайте для начала определимся, с какой целью вам нужен сайт и выберем соответствующий ему тип. В зависимости от выбора, будут подобраны соответствующие модули.
					</p>
				</div>
				<div class="cost_cards_content flex flex_c">
					<div class="cost_card purple_card flex flex_col flex_m center">
						<div class="cost_cards_img cc1"></div>
						<h5>сайт визитка</h5>
						<span>12000 грн</span>
						<p class="discription_text">Ваш личный сайт, либо сайт вашего предприятия. Как правило содержит до 8 страниц и форму обратной связи. Функционал сайта можно расширить за счет модулей, добавив фотогалерею и другие.</p>
					</div>
					<div class="cost_card flex flex_col flex_m center">
						<div class="cost_cards_img cc2"></div>
						<h5>сайт портал</h5>
						<span>18000 грн</span>
						<p class="discription_text">Информативный, развлекательный портал, интерактивный блог, либо форум. Этот тип сайта является очень функциональным и позволяет создавать действительно крупные проекты со специфическим функционалом.</p>
					</div>
					<div class="cost_card flex flex_col flex_m center">
						<div class="cost_cards_img cc3"></div>
						<h5>интернет магазин</h5>
						<span>12000 грн</span>
						<p class="discription_text">Продаете товары? Желаете чтобы у вас был их каталог с возможностью покупки онлайн? Все это вам поможет сделать Интернет-магазин. Функционал сайта можно расширить за счет модулей.</p>
					</div>				
				</div>
				<button class="white_button">продолжить</button>
			</div>
			<div class="bubble46"></div>
	</section>

	<section class="purple_price_line">
		<h2>Цена 12000 грн</h2>
	</section>

    <OurProjects />
        </>
    )
}