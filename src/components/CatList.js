import { connect }  from 'react-redux'
import { fetchCats } from '../actions/index'
import Cats from './Cats'

const mapStateToProps = (state) => ({
    CatList: state.CatList,
    isLoading: state.isLoading,
    error: state.error,
})

function CatList(props){
    console.log(props);
    function handleClick(e){ 
        e.preventDefault()
        props.fetchCats()
    }

    return(

    <>
        {/* Button at the top */}
        <div style={StyleSheet.btnContainer}>
        <button onClick={handleClick} style={styles.btn}>Fetch Cats</button> 
        </div>

        {/* Container that holds all the kitties */}
        <div style={styles.container}>
            {props.isLoading ?  "LOADING CATS" : ""}
            {props.error ? props.error : ""}
            {props.CatList ? 
                <Cats cat = {props.CatList} favorite={false} key = {props.CatList}/>
            : "NO KITTIES HERE"}
            
         </div>
         
        </>
    )};

    const styles = {
        container: {
          display: "flex",
          justifyContent: 'center',
          flexWrap: "wrap",
        },
        btnContainer: {
            textAlign: 'center',
            marginBottom: '25px'
        },
        btn: {
            padding: '8px',
            backgroundColor: 'black',
            color: '#fff',
            borderRadius: '5px'
        }
      };

export default connect(mapStateToProps, {fetchCats}) (CatList)