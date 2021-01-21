import { useMemo } from "react";
import { useDispatch } from "react-redux"
import {ActionCreatorsMapObject, bindActionCreators} from "redux";
import {AppDispatchType} from "./store";

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export function useActions<T extends ActionCreatorsMapObject<any>>(actions: T) {
    const dispatch = useAppDispatch()

    const boundActions = useMemo(() => {
        return bindActionCreators(actions, dispatch)
    }, [])

    return boundActions
}
