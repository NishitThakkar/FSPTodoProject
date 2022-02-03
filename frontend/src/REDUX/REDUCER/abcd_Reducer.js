
export function abcd(state = null, action) {

    switch (action.type) {

        case "LOG":
            return action.payload;

        case "LOGO":
            return action.payload;

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
