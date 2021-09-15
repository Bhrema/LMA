import {useAuth} from '../hooks/useAuth'
import {useHistory} from 'react-router-dom'


import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import '../style/auth.scss'

import {Button} from '../components/button'




export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();


    async function handleCreateRoom(){
        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new');
    }

return(
    <div id="page-auth">
        <aside>
            <img src= {illustrationImg} alt="ilustração simbolizando QandA" />
            <strong>Crie salas de Q&amp;A ao-vivo</strong>
            <p>Tire as dúvidas de sua audiência em tempo real</p>
        </aside>

        <main>
            <div className="main-content">
                <img src={logoImg} alt="letmeask" />
            
            <button onClick = {handleCreateRoom} className="create-room">
                <img src={googleIconImg} alt="logo da google" />
                Crie sua sala com o Google
            </button>
            <div className = "separator">
                ou entre em uma sala
            </div>
            <form action="">
                <input 
                    type="text"
                    placeholder="Digite o código da sala"
                />
                <Button type="submit">
                    Entrar na sala
                </Button>
            </form>
        </div>
        </main>
    </div>
)

}