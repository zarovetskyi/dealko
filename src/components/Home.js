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
				<h1 className="big_title">розробка сайтів під ключ <span>будь-якої складності та обсягів</span></h1>
				<p className="fp_big_text"><b>Dealko</b> - це не просто чергова студія зі створення та просування сайтів, розробки дизайну та додатків. Ми — це команда професіоналів, яка працює із замовником як єдиний механізм, щоб втілити будь-яку ідею в життя.</p>
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
				<h2 className="small_title">про нас</h2>
				<p className="discription_text">Ми спеціалізуємося на розробці сайтів для бізнесу. Ми давно на ринку та добре розуміємо реалії роботи. Ми не просто створюємо сайти для різних тематик та цілей: від сайтів-візиток та landing page до інтернет-магазинів та складних корпоративних порталів, а також наводимо цільових клієнтів за допомогою пошукового просування (SEO), контекстної реклами та розкрутки у соціальних мережах (SMM) . Співробітники нашої компанії є кваліфікованими фахівцями, цінують час та враховують побажання наших клієнтів, постійно вдосконалюють свої знання та вміння.
				</p>
				<button className="white_button">читати більше</button>
			</div>
		</div>
		<div className="bubble44"></div>
	</section>

	<section className="order_site">
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

	<section className="how_work">
		<div className="container">
			<h2 className="small_title center">як ми працюємо</h2>
			<div className="how_work_content flex flex_sb">
				<div className="how_work_card flex flex_col flex_m">
					<h5>Подача заявки</h5>
					<div className="letter_and_photo flex flex_m">
						<span>D</span>
						<img src="img/letter_and_photo1.png" alt=""/>
					</div>
					<p className="discription_text center">Заповніть форму заявки на сайті</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Обробка заявки</h5>
					<div className="letter_and_photo">
						<span>E</span>
						<img src="img/letter_and_photo2.png" alt=""/>
					</div>
					<p className="discription_text center">Ми зателефонуємо Вам обговоримо проект</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Заповнення брифу</h5>
					<div className="letter_and_photo">
						<span>A</span>
						<img src="img/letter_and_photo3.png" alt=""/>
					</div>
					<p className="discription_text center">Ми надішлемо бриф для заповнення</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Розробка прототипу</h5>
					<div className="letter_and_photo">
						<span>L</span>
						<img src="img/letter_and_photo4.png" alt=""/>
					</div>
					<p className="discription_text center">Розробимо прототип майбутнього сайту</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Відмальовування дизайну</h5>
					<div className="letter_and_photo">
						<span>K</span>
						<img src="img/letter_and_photo5.png" alt=""/>
					</div>
					<p className="discription_text center">Відмальовування дизайну макету по прототипу</p>
				</div>
				<div className="how_work_card flex flex_col flex_m">
					<h5>Верстка макету</h5>
					<div className="letter_and_photo">
						<span>O</span>
						<img src="img/letter_and_photo6.png" alt=""/>
					</div>
					<p className="discription_text center">Встановлення сайту на домен та хостинг</p>
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
						<p>Розробка сайту</p>
					</Link>
				</div>
				
				<div class="services_card">
					<Link to="/design">
						<div class="services_picture s_img2"></div>
						<p>Дизайн та графіка</p>
					</Link>
				</div>
				<div class="services_card">
					<Link to="/promotions">
						<div class="services_picture s_img3"></div>
						<p>Просування та реклама</p>
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
				<h2 className="small_title">наші послуги</h2>
				<p className="discription_text">Ми надаємо повний спектр послуг зі створення, просування та технічної підтримки сайтів. Також Ви можете замовити у нас просування у соціальних мережах, розробку брендбука,
фірмового стилю або дизайн логотипу для вашого бізнесу.
				</p>
				<button className="yellow_button">почати проект</button>
			</div>
		</div>
	</section>

	<section className="cost_calculation">
		<div className="container flex flex_m">
			<div className="cost_calculation_content center">
				<h2 className="small_title">РОЗРАХУНОК ВАРТОСТІ РОЗРОБКИ САЙТУ</h2>
				<p className="discription_text">Тут Ви можете розрахувати попередню вартість створення сайту онлайн. Наш калькулятор повністю інтерактивний і Ви можете додавати та виключати потрібні компоненти, формуючи тим самим свій унікальний сайт.
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
					<p>Давайте спочатку визначимося, з якою метою вам потрібен сайт і виберемо відповідний йому тип. Залежно від вибору будуть підібрані відповідні модулі.
					</p>
				</div>
				<div className="cost_cards_content flex flex_c">
					<div className="cost_card purple_card flex flex_col flex_m center">
						<div className="cost_cards_img cc1"></div>
						<h5>сайт-візитка</h5>
						<span>від $349.99 </span>
						<p className="discription_text">Ваш особистий сайт або сайт вашого підприємства. Як правило містить до 8 сторінок та форму зворотного зв'язку. Функціонал сайту можна розширити за рахунок модулів, додавши фотогалерею та інші.</p>
					</div>
					<div className="cost_card flex flex_col flex_m center">
						<div className="cost_cards_img cc2"></div>
						<h5>інтернет-портал</h5>
						<span>від $499.99</span>
						<p className="discription_text">Інформативний, розважальний портал, інтерактивний блог або форум. Цей тип сайту є дуже функціональним і дозволяє створювати справді великі проекти зі специфічним функціоналом..</p>
					</div>
					<div className="cost_card flex flex_col flex_m center">
						<div className="cost_cards_img cc3"></div>
						<h5>інтернет-магазин</h5>
						<span>від $944.99</span>
						<p className="discription_text">Продаєте товари? Бажаєте щоб у вас був їхній каталог з можливістю покупки онлайн? Все це допоможе зробити Інтернет-магазин. Функціонал сайту можна розширити за рахунок модулів.</p>
					</div>				
				</div>
				<button className="white_button">продовжити</button>
			</div>
			<div className="bubble46"></div>
	</section>

	<section className="purple_price_line">
		<h2>Ціна від $349.99</h2>
	</section>

	<OurProjects />

	<Reviews />


        </>
    )
}