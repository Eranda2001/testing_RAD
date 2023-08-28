import { UseAuthContext } from './useAuthContext';
import { UseWorkoutsContext } from './useWorkoutsContext';

export const useLogout = () => {
    const { dispatch } = UseAuthContext()
    const { dispatch: workoutsDispatch } = UseWorkoutsContext()

    const logout = () =>{
        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({type: 'LOGOUT'})
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})

    }

    return { logout }
}