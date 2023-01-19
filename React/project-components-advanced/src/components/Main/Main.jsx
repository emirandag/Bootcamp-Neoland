//import  { SubTitle }  from '../../components'
//import { CharacterList } from '../../components'
import './Main.css'
import SubTitle from '../SubTitle/SubTitle'
import CharacterList from '../CharacterList/CharacterList'

const Main = () => {

    const infoText = "Personajes"
    return (
        <main>
            <SubTitle text={infoText} />
            <CharacterList />
        </main>
    )
}

export default Main