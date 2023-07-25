import logo from '../reactjs-icon.png'
export default function Navbar(){
    return(
        <header>
            <div>
                <div><img src={logo}></img></div>
                <div><p className="nav">ReactFacts</p></div>
                
                
            </div>
            <div className='reacts'>
                <p >React Course - Project 1</p>
            </div>
        </header>
    )
}
