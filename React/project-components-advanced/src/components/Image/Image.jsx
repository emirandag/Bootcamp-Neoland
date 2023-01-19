
const Image = ({url, nombre, ancho, alto}) => {
    return <img src={url} alt={nombre} width={ancho} height={alto} />

}

export default Image