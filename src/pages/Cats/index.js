import {useDispatch, useSelector} from "react-redux";
import {catsThunk} from "../../redux/thunks/catsThunk";
import {catsSelector} from "../../redux/slices/catsSlices";
import {isLoadingCats} from "../../redux/slices/catsSlices";
const Cats = () => {
    const dispatch = useDispatch();
    const useSelect = useSelector(catsSelector);
    // const useSelectUrl = useSelector(catsSelectorUrl);
    const isLoading = useSelector(isLoadingCats);

     const clickHandler = ()=> {
        dispatch(catsThunk());

    }

    return(
        <div className="image-content">


            {  isLoading ?
                <>
                <p>Loading...</p>
                </>

        :
                <>
                <p>{useSelect.name}</p>
                 <img src={useSelect.url} alt=""/>
                <button onClick={() => clickHandler()}>Add cat image</button>
                </>

    }
        </div>

    )
}
export default Cats