import { createStore, compose } from 'redux'
import rootReducer from './reducers'
import firebaseConfig from './config'
import { reactReduxFirebase } from 'react-redux-firebase'

export default function configureStore (initialState, history) {


    const createStoreWithMiddleware = compose(
        reactReduxFirebase(firebaseConfig,
            {
                userProfile: 'users',
                enableLogging: false
            }
        ),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    )(createStore)
    const store = createStoreWithMiddleware(rootReducer)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}