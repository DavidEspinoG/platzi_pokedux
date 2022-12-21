import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card
const PokemonCard = ({name}) => {
    return <Card 
            title={name}
            cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}
            extra={<StarOutlined/>}
            >
            <Meta
                description="Fire, Magic" />
        </Card>
}

export default PokemonCard;