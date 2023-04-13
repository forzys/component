

import { useRef, useState, useCallback } from "react";

const depsAreSame = (oldDeps, deps) => { 
    if(oldDeps === deps) return true
    
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
    })
  
    if(current.initialized === false || !depsAreSame(current.deps, deps)) {
        current.deps = deps;
        current.obj = fn();
        current.initialized = true;
    }
 
    return current.obj
} 
  

export const useUpdate = () => {
    const [, setState] = useState({});

    return useCallback(() => setState({}), []);
}


export default useCreation