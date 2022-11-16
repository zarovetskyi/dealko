import OurProjects from './OurProjects';
import Reviews from './Reviews';

export default function Contacts()
{
    window.scrollTo(0,0);

    return (
        <>
        <section class="first_page fp_contacts">
            <div class="container flex">
                <div class="contacts_first_page_text">
                    <h1 class="big_title ">контакты</h1>
                    <p class="fp_small_text">Вы можете связаться с нами по указанным телефонам или отправить нам сообщение, используя форму обратной связи.</p>
                </div>
                <div class="contacts_img"></div>
            </div>
            <div class="bubble1"></div>
            <div class="bubble2"></div>
            <div class="bubble3"></div>
            <div class="bubble4"></div>
            <div class="bubble5"></div>
            <div class="bubble6"></div>
        </section>

        <section class="get_consultation">
            <div class="container flex flex_c">
                <h3 class="small_title center">ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ</h3>
                <div class="get_consultation_content flex flex_sa flex_m">
                    <div class="get_consultation_info center">
                        <h5>ОПИШИТЕ ВАШ ПРОЕКТ</h5>
                        <p class="discription_text">Наши специалисты свяжуться  в ближайщее время</p>
                        <input type="text" class="discription_text center" placeholder="Имя"/>
                        <input type="text" class="discription_text center" placeholder="E-mail"/>
                        <input type="text" class="discription_text center" placeholder="Телефон"/>
                        <textarea name="" class="discription_text center" placeholder="Вопрос / комментарий" id=""></textarea>
                        <button>ОТПРАВИТЬ</button>
                    </div>
                    <div class="get_consultation_photo"></div>
                </div>
            </div>
            <div class="bubble17"></div>
            <div class="bubble18"></div>
            <div class="bubble19"></div>
            <div class="bubble20"></div>
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


        <section class="order_site order_site_pr">
            <div class="container flex flex_m flex_c">
                <div class="order_site_content center">
                    <h2 class="small_title">где заказать сайт?</h2>
                    <p class="discription_text">Конечно же у нас! Dealko станет надёжным партнёром Вашего бизнеса. За нас говорят опыт и выполненные работы, отзывы клиентов и профессионализм сотрудников, погружение в проект и работа на результат.
                    </p>
                </div>
                <div class="order_site_photo"></div>
            </div>
            <div class="bubble8"></div>
            <div class="bubble9"></div>
            <div class="bubble10"></div>	
        </section>

        <OurProjects/>
        <Reviews/>
        </>
    )
}