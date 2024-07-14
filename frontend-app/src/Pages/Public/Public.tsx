import './Public.css'
import { Link } from 'react-router-dom'

const Public =()=>{
const content=(
   <div className="">
<nav className="nav--public">
    <a> Brand</a>
<a href="">Home</a>
<a href="">About Us</a>
<p><Link to='/login'>Log In</Link></p>
</nav>
<main className="main--public">

<div className="right--sect">

<h1>Welcome </h1>
                <button className="btn--1"> Get Started </button>
</div>
<div className="left--sect">
    
    <img src='https://ddlqvo8fho737.cloudfront.net/images/516edfecd8b860a110f1222c3f1a6c44.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3TJ3V4Z4TLCHRDFE%2F20240712%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20240712T154944Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Signature=e950e6f7c8a926c04147035743b0c32a332d6afcc8e844e4a7c0ca78b39ffc03' alt="una vaina" />
 <section className='bottm--section'>
 <h1> Manage your daily tasks the easiest way</h1>
 <p>Feel free to try this wonderful task managing web app</p>
</section>
</div>
            
</main>

<footer className="footer--public">
    Pie
</footer>

   </div> 
)
    return content;
}

export default Public;