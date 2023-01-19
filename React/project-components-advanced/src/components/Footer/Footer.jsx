//import { Image, Paragraph} from '../../components'
import './Footer.css'
import Image from '../Image/Image'
import Paragraph from "../Paragraph/Paragraph"

const Footer = () => {
    return (
        <footer>
            <Paragraph text="Created by Eduardo Miranda" />
            <Image />
            <Paragraph text="Copyright" />
        </footer>
    )
}

export default Footer