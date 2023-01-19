import { Paragraph, Image } from '../../components'

const ItemList = () => {
    return (
        <>
            <li>
                <Paragraph text="Name"/>
                <Image />
                <Paragraph text="Status"/>
                <Paragraph text="Origin"/>
            </li>
        </>
        
    )
}

export default ItemList