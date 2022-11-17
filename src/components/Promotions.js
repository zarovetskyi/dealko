import OurProjects from './OurProjects';
import Reviews from './Reviews';


export default function AddServices()
{
	window.scrollTo(0,0);

    return (
        <>

    <section className="first_page fp_p_and_a">
		<div className="container flex">
			<div className="p_and_a_first_page_text">
				<h1 className="big_title">просування та реклама <span>будь-якої складності та обсягів</span></h1>
				<p className="fp_big_text"><b>Dealko</b> - це не просто чергова студія зі створення та просування сайтів, розробки дизайну та додатків. Ми — це команда професіоналів, яка працює із замовником як єдиний механізм, щоб втілити будь-яку ідею в життя.</p>
			</div>
			<div className="promotion_and_advertising_img"></div>
		</div>
		<div className="bubble1"></div>
		<div className="bubble2"></div>
		<div className="bubble3"></div>
		<div className="bubble4"></div>
		<div className="bubble5"></div>
		<div className="bubble6"></div>
	</section>

	<section className="promotion_cards">
		<div className="container flex flex_c">
			<div className="promotion_cards_content flex flex_c">
				<div className="promotion_card flex flex_col flex_m center">
					<div className="promotion_card_img pci1"></div>
					<h5 className="small_title">SMM</h5>
					<p className="discription_text">Розкрутка груп - SMM просування в instagram, вконтакті, facebook. У Вас є публічна сторінка чи група, яку Ви бажаєте наповнити цільовою аудиторією? Відмінно тоді Вам варто скористатися нашою послугою з просування в соціальних мережах.</p>
				</div>
				<div className="promotion_card flex flex_col flex_m center">
					<div className="promotion_card_img pci2"></div>
					<h5 className="small_title">КОМПЛЕКС</h5>
					<p className="discription_text">Ми знаємо, як залучити клієнтів! Комплексний інтернет-маркетинг у Dealko. Однією з основних цілей створення сайту є залучення клієнтів. Ми пропонуємо комплексний інтернет-маркетинг вашого бізнесу. В наші послуги входять оптимізація та просування (SEO), налаштування та ведення контекстної реклами в Google AdWords, просування в соціальних мережах (SMM) та інші механізми.</p>
				</div>
				<div className="promotion_card flex flex_col flex_m center">
					<div className="promotion_card_img pci3"></div>
					<h5 className="small_title">SEO</h5>
					<p className="discription_text">Пошукове просування - це комплекс робіт із внутрішньої та зовнішньої оптимізації, який спрямований на покращення результату в органічній видачі для залучення цільових відвідувачів на сайт. Ми займаємося пошуковою оптимізацією та просуванням сайтів вже понад 5 років!</p>
				</div>
			</div>
		</div>
		<div className="bubble21"></div>
	</section>


	<section className="get_consultation">
		<div className="container flex flex_c">
			<h3 className="small_title center">ОТРИМАЄТЕ КОНСУЛЬТАЦІЮ</h3>
			<div className="get_consultation_content flex  flex_sa flex_m">
				<div className="get_consultation_info center">
					<h5>ОПИШИТЕ ВАШ ПРОЕКТ</h5>
					<p className="discription_text">Менеджер законтактує з вами найближчим часом</p>
					<input type="text" className="discription_text center" placeholder="Ім'я"/>
					<input type="text" className="discription_text center" placeholder="E-mail"/>
					<input type="text" className="discription_text center" placeholder="Телефон"/>
					<textarea name="" className="discription_text center" placeholder="Запитання / коментар" id=""></textarea>
					<button>НАДІСЛАТИ</button>
				</div>
				<div className="get_consultation_photo"></div>
			</div>
		</div>
		<div className="bubble17"></div>
		<div className="bubble18"></div>
		<div className="bubble19"></div>
		<div className="bubble20"></div>
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

  

    <OurProjects />
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