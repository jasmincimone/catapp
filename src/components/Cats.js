import { connect } from 'react-redux'
import { addFavorite } from '../actions/index'

const Cats = (props) => {
    //Handles the add to Favorite button
console.log(props)
    const handleFavorite = (e) => {
        //pass the id we set on each button of each photo
        //the id value is the dog we import at the top
        props.addFavorite(e.target.id);
    }

    return (
        <div style={styles.container}>
            <h1>KITTIES</h1>
            <div style={styles.imgContainer}>
                <img src={props.cat} style={styles.img} alt={'kittykitty'} />
            </div>
            <div style={styles.btn}>
                <button id={props.cat} onClick={handleFavorite}>
                    favorite
                    {/* {props.favorite ? "Remove from favorites" : "Add to Favorites"} */}
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        margin: "10px",
    },
    imgContainer: {
        display: "flex",
        justifyContent: "center",
    },
    img: {
        width: "400px",
        height: "300px",
    },
    btn: {
        textAlign: "center",
        paddingTop: '5px'
    }
};

export default connect(null, {addFavorite}) (Cats);