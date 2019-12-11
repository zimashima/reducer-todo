export const initialState = {
  todo: [
    {
        item: 'Get the Naughty and Nice List',
        completed: false,
        id: 1,
        complete_by: 'December 14'
      },
      {
        item: 'Contact Elves for packaging helps',
        completed: false,
        id: 2,
        complete_by: 'December 14'
      },
      {
        item: "Show up at Department Store to get the Christmas Vibe going :)",
        completed: false,
        id: 3,
        complete_by: 'December 14'
      },
      {
        item: 'Saddle up reindeers',
        completed: false,
        id: 4,
        complete_by: 'December 23'
      },
      {
        item: "Update Children's addresses",
        completed: false,
        id: 5,
        complete_by: 'December 20'
      },
      {
        item: "Load presents on the sleigh",
        completed: false,
        id: 6,
        complete_by: 'December 23'
      },
      {
        item: "Visit children's houses and make their Christmas! (without them knowing!)",
        completed: false,
        id: 7,
        complete_by: 'December 24'
      }
  ]
}

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {

    default:
      return state;

    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo,
          {
            id: new Date(),
            completed: false,
            item: action.payload[0],
            complete_by: action.payload[1]
          }
        ]
      };
    case 'TOGGLE_COMPLETE':

        return {
            ...state,
            todo: state.todo.map( el => {
              if (el.id === action.payload){
                return {
                  ...el,
                  completed: !el.completed
                }
              } else { return el }
              }
            )
          };
    case 'CLEAR_COMPLETED':
        return {
            ...state,
            todo: state.todo.filter(el=> el.completed ===false)
        };
  };
}