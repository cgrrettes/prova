import './footer.css'

function Footer(){
    return(
        <footer className="baixo">

          <img className='andrey' src={require('./SENAI.png')} width={150}/> 
            <div className='textinho1'>
                <h3>&copy; 2024 Todos os direitos reservados ao povo do do 3N/informática para internet.</h3>
            </div>
            <div className='textinho2'>
                <p>Contato: osmelhores@sesisenai.com</p>
            </div>
        </footer>
    )
}

export default Footer;