import { useEffect,useRef } from 'react';

const useSkipFirstRender = (callback,dependencies) => {

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        return callback();
    },[ dependencies ]);
};

export default useSkipFirstRender;
