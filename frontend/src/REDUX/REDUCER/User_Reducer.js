
export function user(state = null, action) {

    switch (action.type) {

        case "LOGIN":
            return action.payload;

        case "LOGOUT":
            return null;

        default:
            return state;
    }
}

// export function user(state = null, action) {

//     switch (action.type) {

//         case "SET_USER":
//             return action.payload;

//         case "LOGOUT_USER":
//             return null;

//         default:
//             return state;

//     }

// }
