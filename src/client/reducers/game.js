import { WIN, START, END, SHAPES } from '../actions/game'
import shapes from '../functions/newShapes'

const initialState = {
  start: false,
  win: false,
  end: false,
  newShapes:[],
  shapes: []
}

const reducer = (state = initialState , action) => {
  switch(action.type){
    case WIN:
      return { 
        ...state,
        win: true
      }
    // case START:
    //   return {
    //     ...state,
    //     start: true,
    //     shapes: shapes(Math.floor(Math.random() * 7)),
    //     newShapes: shapes(Math.floor(Math.random() * 7))
    //   }
    case END:
        return {
          ...state,
          end: true
        }
    case SHAPES: {
      return {
        ...state,
        shapes: state.newShapes,
        newShapes: shapes(Math.floor(Math.random() * 7))
      }
    }
    default: 
      return state
  }
}

export default reducer

