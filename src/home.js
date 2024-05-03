import './home.css'

function Home (){
    return(
        <div className="corpo">
            <h2 className='titulo'>Bem-vindo a Página Inicial da nossa AV2</h2>
            <p className='sub-titulo'>Conheça os melhores Cosplays do SESI/SENAI</p>
            <div class="container"></div>
          
            <img src={require('./FOTO2.jpg')} width={350}/>
            <img src={require('./FOTO3.jpg')} width={480}/>
            <img src={require('./FOTO2.jpg')} width={480}/>
            <img src={require('./FOTO6.jpg')} width={480}/>
            <h4 className='mini1'>Povo da Turma da Mônica</h4>
            <h4 className='mini2'>Foveiras e o Teacher TOP!!!</h4>
            <h4 className='mini3'>As operadoras TIM e CLARO + Flanelinha</h4>
            <h4 className='mini4'>Tigrinho Men.</h4>
            <h4 className='mini5'>Povo da Turma da Mônica</h4>

        
         
        </div>
    );
}

export default Home;