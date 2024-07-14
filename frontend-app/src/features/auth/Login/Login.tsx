const Login =()=>{
    const content=(
       <div className="bg-cyan-700 flex justify-center items-center" >

        <label className='font-medium'htmlFor="">Usuario</label>
        <input className="p-2" type="text" placeholder="aqui"/>
        <label className="font-medium" htmlFor="">Contraseña</label>
        <input className='p-2'type="text" placeholder="aqui"/>

       </div> 
    )
        return content;
    }
    
    export default Login;