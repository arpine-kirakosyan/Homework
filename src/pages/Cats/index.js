import { useDispatch, useSelector } from "react-redux";
import { todosApi, useGetTodosQuery } from '../../api/RTK/todos';
import { IMAGES } from '../../constants';
import Loadable from '../../helpers/Loadable';
import { useOnMount } from '../../hooks/useOnMount';
import { catsThunk } from "../../redux/thunks/catsThunk";
import {
  catNameSelector,
  catUrlSelector, removeCatData,
  setCatData
} from "../../redux/slices/catsSlices";
import { isLoadingCats } from "../../redux/slices/catsSlices";

import './index.css';

const catData = {
  name: "Tom",
  url: "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg"
};

const Cats = () => {
  const dispatch = useDispatch();
  const name = useSelector(catNameSelector);
  const url = useSelector(catUrlSelector);
  // const useSelectUrl = useSelector(catsSelectorUrl);
  const isLoading = useSelector(isLoadingCats);

  // const clickHandler = () => {
  //   dispatch(catsThunk());
  // };

  // const { data, isLoading: areTodosLoading, error } = useGetTodosQuery()
  const { data, isLoading: areTodosLoading, error } = todosApi.endpoints.getTodos.useQuery('some_params');

  console.log('isLoading', areTodosLoading);
  console.log('data', data);
  console.log('error', error);

  useOnMount(() => {
    console.log('mounted');
  });

  const clickHandler = () => {
    dispatch(setCatData(catData));
  };

  const removeCat = () => {
    dispatch(removeCatData());
  };

  return (
    <div className="image-content">
      <>
        {isLoading && <p>Loading...</p>}
        {/*<p>{name}</p>*/}
        {/*<img src={url} alt="" loading='lazy' />*/}

        <div className="cats-container">
          {
            IMAGES.map((catUrl) => (
              <div key={catUrl} className="cats-item">
                <Loadable src={catUrl} />
              </div>
            ))
          }
        </div>

        <button onClick={clickHandler}>Add cat image</button>
        <button onClick={removeCat}>Remove cat image</button>
      </>
    </div>

  );
};
export default Cats;
