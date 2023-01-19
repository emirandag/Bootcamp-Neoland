import  { SubTitle }  from '../../components'
import { CharacterList } from '../../components'

const Main = () => {

    const infoText = "This is Subtitle"
    return (
        <main>
            <SubTitle text={infoText} />
            <CharacterList />
        </main>
    )
}

export default Main