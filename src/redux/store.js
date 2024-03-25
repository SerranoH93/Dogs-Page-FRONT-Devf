import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reduce';

// Crea el almacenamiento de Redux, pasando el reducer y aplicando el middleware thunk
const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

// Exporta el almacenamiento para que pueda ser utilizado en otros lugares de la aplicación
export default store;
