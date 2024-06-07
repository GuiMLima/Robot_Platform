import '../styles/Button_Enter_styles.css'
import { Link } from 'react-router-dom';

const Button_Enter = () => {
    return(
        <div className='buttons'>
            <Link to='/home'><button>SignUp</button></Link>
            <Link to='/aboutus'><button>LogIn</button></Link>
        </div>
    )
    

    
}

export default Button_Enter;