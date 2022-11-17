import { Link } from 'react-router-dom'

export default function OurProjects()
{
    return (
        <>
        <section className="our_projects">
            <div className="container flex flex_col flex_m">
                <h2 className="small_title">наші проекти</h2>
                <div className="our_projects_content flex flex_c">
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Betonko</p>
                            </a>
                        </div>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipOKKPPOjcalfmPDgR_WJjEmwvWCMdkBe6dPZoqA=s1360-w1360-h1020" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>Techniko</p>
                            </a>
                        </div>
                        <img src="https://lh3.googleusercontent.com/p/AF1QipPGA40LBMqnJ4R8m0aeXpdO1UPEGOg0TCXjQYuC=s1360-w1360-h1020" alt=""/>
                    </div>
                    <div className="our_projects_card">
                        <div className="our_projects_card_info flex flex_c flex_m center">
                            <a href="">
                                <p>SportStore55</p>
                            </a>
                        </div>
                        <img src="https://designhooks.com/wp-content/uploads/2019/01/OnPaste.20190121-202854.png" alt=""/>
                    </div>
                </div>
                <Link to="/projects">
                     <button className="white_button">переглянути всі проекти</button>
                </Link>
            </div>
            <div className="bubble14"></div>
            <div className="bubble15"></div>
            <div className="bubble16"></div>
        </section>

        </>
    )
}