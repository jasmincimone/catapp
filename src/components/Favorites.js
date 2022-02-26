import {connect} from 'react-redux'
import Cats from './Cats'


const mapStateToProps = state => ({
    FavoritesList: state.favorites
})

function Favorites(props){
const { FavoritesList } = props
console.log(props)
    return(
        <div>
            
            {FavoritesList ? FavoritesList.map(cat => {
                console.log(cat)
                return(
                    <Cats cat={cat} key={cat} favorite={true}/>
                )
            })
                   
                : "NO FAVORITE KITTIES"}
        </div>
    )
}

export default connect(mapStateToProps, {}) (Favorites)