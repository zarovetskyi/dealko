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
				<h1 className="big_title">продвижение и реклама <span>любой сложности и объёмов</span></h1>
				<p className="fp_big_text"><b>Dealko</b> - это не просто очередная студия по  созданию и продвижению сайтов, разработке дизайна и приложений.Мы — это команда профессионалов, которая работает с заказчиком как единый механизм, чтобы воплотить любую идею в жизнь.Любим нестандартные приложения и обязательно придумаем оригинальную концепцию индивидуально для вашего бизнеса.</p>
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
					<p className="discription_text">Раскрутка групп - SMM продвижение в instagram, вконтакте, facebook. У Вас есть публичная страница или группа, которую Вы хотите наполнить целевой аудиторией? Отлично, тогда Вам стоит воспользоваться нашей услугой по продвижению в социальных сетях.</p>
				</div>
				<div className="promotion_card flex flex_col flex_m center">
					<div className="promotion_card_img pci2"></div>
					<h5 className="small_title">КОМПЛЕКС</h5>
					<p className="discription_text">Мы знаем как привлечь клиентов! Комплексный интернет-маркетинг в Dealko. Одной из основных целей создания сайта является привлечение клиентов. Мы предлагаем комплексный интернет-маркетинг вашего бизнеса. В наши услуги входят оптимизация и продвижение (SEO), настройка и ведение контекстной рекламы в Яндекс.Директ и Google AdWords, продвижение в социальных сетях (SMM) и другие механизмы.</p>
				</div>
				<div className="promotion_card flex flex_col flex_m center">
					<div className="promotion_card_img pci3"></div>
					<h5 className="small_title">SEO</h5>
					<p className="discription_text">Поисковое продвижение - это комплекс работ по внутренней и внешней оптимизации, который направлен на улучшение результата в органической выдачи для привлечения целевых посетителей на сайт. Мы занимаемся поисковой оптимизацией и продвижением сайтов уже более 5 лет!</p>
				</div>
			</div>
		</div>
		<div className="bubble21"></div>
	</section>


	<section className="get_consultation">
		<div className="container flex flex_c">
			<h3 className="small_title center">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ</h3>
			<div className="get_consultation_content flex  flex_sa flex_m">
				<div className="get_consultation_info center">
					<h5>ОПИШИТЕ ВАШ ПРОЕКТ</h5>
					<p className="discription_text">Наши специалисты свяжуться  в ближайщее время</p>
					<input type="text" className="discription_text center" placeholder="Имя"/>
					<input type="text" className="discription_text center" placeholder="E-mail"/>
					<input type="text" className="discription_text center" placeholder="Телефон"/>
					<textarea name="" className="discription_text center" placeholder="Вопрос / комментарий" id=""></textarea>
					<button>ОТПРАВИТЬ</button>
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

  

    <OurProjects />
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