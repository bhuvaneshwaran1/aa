import '../Home/Home.css'
import Sidebar from '../Sidebar/Sidebar'

export const Home = () => {
    return (
        <div  className="full-screen">
            <div  className="sidenavs">
                <Sidebar />
        
            
            </div>
            <div className='navscreen'>flex 2</div>
        </div>
    )
}