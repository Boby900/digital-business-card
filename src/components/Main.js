import Group from '../Group.png'
import header from '../WhatsApp Image 2023-07-24 at 09.36.44.jpeg'
import facebook from '../Facebook Icon.png'
import instagram from '../Instagram Icon.png'
import github from '../GitHub Icon.png'
import twitter from '../Twitter Icon.png'
export default function Main() {
    return (

        <div className='main'>
            <div className='second-container'>
                    <div className='img'>
                        <img src={header}></img>
                    </div>
                    <div className='contain'>
                        <div>
                            <h2>Boby Tiwari</h2>
                            <p className='front'>Frontend Developer</p>
                            <p>bobytiwari.me</p>
                            <div>
                                <a><button>Email</button></a>
                                <a><button>Linkedin</button></a>
                            </div>
                        </div>
                        <div>
                            <h4>About</h4>
                            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                        </div>
                        <div>
                            <h4>interests</h4>
                            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                        </div>
                        <div className='social'>
                            <a href='#'><img src={facebook}></img></a>
                            <a href='#'><img src={github}></img></a>
                            <a href='#'><img src={instagram}></img></a>
                            <a href='#'><img src={twitter}></img></a>
                        </div>
                    </div>
            </div>
        </div>
    )
}