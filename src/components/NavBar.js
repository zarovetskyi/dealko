import { Link } from 'react-router-dom'


export default function NavBar()
{
    return (
        <>
        <header>
            <div className="header-top">
                <div className="container">
                    <div className="header_top_menu flex flex_sb flex_m">
                        <Link to="/">
                            <img src="img/logo.png" alt=""/>
                        </Link>
                        
                        <nav>
                            <Link to="/about">о нас</Link>
                            <Link to="/services">услуги</Link>
                            <Link to="/projects">проекты</Link>
                            <Link to="/contacts">контакты</Link>
                        </nav>
                        <button className="yellow_button">начать проект</button>
                        <div className="choose_language flex flex_col flex_m">
                            <a href="" className="choose_language_active">ru</a>
                            <div className="square flex flex_c flex_m flex_col">
                                <div></div>
                                <div></div>
                            </div>
                            <a href="" className="choose_language_noactive">en</a>
                        </div>
                    </div>	
                    <div className="burger_menu flex flex_sb flex_m">
                        <Link to="/">
                            <img src="img/logo.png" alt=""/>
                        </Link>
                        <div className="burger_menu_block">
                            <span></span>
                        </div>
                        <div className="burger_menu_content">
                            <div className="burger_menu_content_block flex flex_col flex_m flex_c">
                                <div className="burger_menu_content_info">
                                    <nav className="burger_menu_content_nav flex flex_col flex_m">
                                        <Link to="/about">о нас</Link>
                                        <Link to="/services">услуги</Link>
                                        <Link to="/projects">проекты</Link>
                                        <Link to="/contacts">контакты</Link>
                                    </nav>
                                    <button className="yellow_button">начать проект</button>
                                    <div className="choose_language_bmci flex flex_sa flex_m">
                                        <a href="" className="choose_language_bmci_active">ru</a>
                                        <div className="square flex flex_c flex_m flex_col">
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <a href="" className="choose_language_bmci_noactive">en</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </div>
        </header>

        </>
    )
}