import { Link } from 'react-router-dom';

export default function Footer()
{
    return (
        <>
    <footer>
		<div class="container flex">
			<div class="footer_services_cards flex flex_c">
				<h2 class="small_title center">начните работать уже&nbsp;сегодня</h2>
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
			</div>	
			<div class="footer_contacts">
				<h2 class="small_title">контакты</h2>
				<ul class="footer_ul flex flex_col flex_m">
					<li><a href="" class="num">+38 00 999 88 77 </a></li>
					<li><a href="">VIBER</a></li>
					<li><a href="">TELEGRAM</a></li>
					<li><a href="">WHATSAPP</a></li>
				</ul>
			</div>
			<div class="footer_bottom flex flex_col flex_m ">
				<div class="maybe_talk flex flex_col flex_m">
					<h2>Может продолжим разговор?
						<a href="">dealko@mail.ru</a><br/>
						<a href="">+38 999 888 77 </a><br/>
						<span>или</span>
					</h2>
					<button class="yellow_button">начать проект</button>	
				</div>
				<div class="footer_social flex flex_m flex_sb">
					<ul class="flex">
						<li><a href="" class="small_title">facebook</a></li>
						<li><a href="" class="small_title">instagram</a></li>
						<li><a href="" class="small_title">telegram</a></li>
					</ul>
					<div class="footer_logo flex flex_b">
						<div class="footer_logo_img"></div>
						<p>2021</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </>
    )
}