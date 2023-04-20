

import { useRef, useState, useCallback } from "react";
import { useMemoizedFn } from "./useMemoize";

const depsAreSame = (oldDeps, deps) => { 
    if(oldDeps === deps) return true;
    for(let i = 0; i < oldDeps.length; i++) { 
        if(!Object.is(oldDeps[i], deps[i])) return false
    }
    return true
}

export const useCreation = (fn, deps)=> {
    const { current } = useRef({ 
        deps,
        obj:undefined,
        initialized: false
    });

    if(current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true;
    }
    
    return current.obj
}

export const useUpdate = (initialState)=> {
    const [state, setState] = useState(initialState);

    const onForceUpdate = useMemoizedFn((...[partial, delay]) => {
        return new Promise((resolve)=>{
            let forces
            setState((current)=>{
                const params = typeof partial === 'function' ? partial(current) : partial;
                forces = { ...current, ...params };
                return forces
            }),resolve(forces);  
        })
    });

    return [state, onForceUpdate];
}



export const useActive = ({ value, init, onChange }) => { 
    const [active, setActive] = useState(init);

    const onHandleChange = (e) => {
        setActive(e), onChange?.(e);
    };
 
    if (value !== undefined) {
        return [value, onChange, true];
    }

    return [active, onHandleChange, false];
}

export default useCreation