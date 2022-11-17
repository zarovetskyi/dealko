import { Link } from 'react-router-dom';

export default function Footer()
{
    return (
        <>
    <footer>
		<div class="container flex">
			<div class="footer_services_cards flex flex_c">
				<h2 class="small_title center">почніть працювати вже&nbsp;сьогодні</h2>
				<div class="services_cards_content flex flex_m flex_sb">
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
						<p>Додаткові послуги</p>
					</Link>
				</div>
			</div>
			</div>	
			<div class="footer_contacts">
				<h2 class="small_title">контакти</h2>
				<ul class="footer_ul flex flex_col flex_m">
					<li><a href="" class="num">+38 099 661 30 28</a></li>
					<li><a href="">TELEGRAM</a></li>
					<li><a href="">WHATSAPP</a></li>
					<li><a href="">VIBER</a></li>
				</ul>
			</div>
			<div class="footer_bottom flex flex_col flex_m ">
				<div class="maybe_talk flex flex_col flex_m">
					<h2>Може продовжимо розмову?
						<a href="">team@dealko.com.ua</a><br/>
						<a href="">+38 099 661 30 28</a><br/>
						<span>або</span>
					</h2>
					<button class="yellow_button">почати проект</button>	
				</div>
				<div class="footer_social flex flex_m flex_sb">
					<ul class="flex">
						<li><a href="" class="small_title">facebook</a></li>
						<li><a href="" class="small_title">instagram</a></li>
						<li><a href="" class="small_title">telegram</a></li>
					</ul>
					<div class="footer_logo flex flex_b">
						<div class="footer_logo_img"></div>
						<p>2021-2023</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
        </>
    )
}