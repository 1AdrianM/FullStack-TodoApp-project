import './NavBar.css'
const NavBar =()=>{

    const content=(
    <nav className="bg-cyan-800 p-4 top-0 flex ">
     <div className="font-medium ">
     <a href=""> Home</a>
     <a href="">Notas</a>
     <a href="">Tu usuario</a>
     <a href="">Session </a>
     </div>
    </nav>
    )
return content;
}

export default NavBar;