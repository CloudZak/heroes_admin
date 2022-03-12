// import { createReducer } from "@reduxjs/toolkit"

// import {
//     heroesFetching,
//     heroesFetched,
//     heroesFetchingError,
//     heroCreated,
//     heroDeleted,
//     heroFiltered
// } from '../actions';

// const initialState = {
//     heroes: [],
//     heroesLoadingStatus: 'idle',
//     filters: 'all'
// }

// const reducer = createReducer(initialState, {
//     [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
//     [heroesFetched]: (state, action) => {
//                     state.heroesLoadingStatus = 'idle';
//                     state.heroes = action.payload;
//                 },
//     [heroesFetchingError]: state => {
//                     state.heroesLoadingStatus = 'error';
//                 },
//     [heroCreated]: (state, action) => {
//                     state.heroes.push(action.payload);
//                 },
//     [heroDeleted]: (state, action) => {
//                     state.heroes = state.heroes.filter(item => item.id !== action.payload);
//                 },
//     [heroFiltered]: (state, action) => {
//                     state.filters = action.payload;
//                 }
//             },
//     [],
//     state => state
// )

// const reducer = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(heroCreated, (state, action) => {
//             state.heroes.push(action.payload);
//         })
//         .addCase(heroDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload);
//         })
//         .addCase(heroFiltered, (state, action) => {
//             state.filters = action.payload;
//         })
//         .addDefaultCase(() => {})
// })

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading',
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_DELETED':
//             const newHeroList = state.heroes.filter(item => item.id !== action.payload);
//             return {
//                 ...state,
//                 heroes: newHeroList
//             }
//         case 'HERO_CREATED':
//             let newCreatedHeroList = [...state.heroes, action.payload];
//             return {
//                 ...state,
//                 heroes: newCreatedHeroList
//             }
//         case 'HERO_FILTERED':
//             return {
//                 ...state,
//                 filters: action.payload
//             }
//         default: return state
//     }
// }

// export default reducer;