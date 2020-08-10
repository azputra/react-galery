const initialState = {
    likeGalery: []
}

const likeGaleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE_GALERY':
            return { ...state, likeGalery: action.payload }
        default:
            return state
    }
}

export default likeGaleryReducer