import { getFirestore,getDoc,doc } from "firebase/firestore";
import { useEffect,useState } from 'react';

const useQueryById = (type,id,typeTwo,idTwo) => {
    const db = getFirestore();
    const [ queryData,setQueryData ] = useState(null);
    const [ gettingQueryData,setGettingQueryData ] = useState(true);
    const [ newQueryReq,setNewQueryReq ] = useState(0);

    useEffect(() => {
        const getData = async () => {
            let docRef;
            if (typeTwo !== undefined) {
                docRef = doc(db,type,id,typeTwo,idTwo);
                getDoc(docRef)
                    .then((res) => {
                        setQueryData(res.data());
                        setGettingQueryData(false);
                    })
                    .catch((e) => {
                        setGettingQueryData(false);
                        console.log(e);
                    });
            }
            else {
                docRef = doc(db,type,id);
                getDoc(docRef)
                    .then((res) => {
                        setQueryData(res.data());
                        setGettingQueryData(false);
                    })
                    .catch((e) => {
                        setGettingQueryData(false);
                        console.log(e);
                    });
            }
        };
        getData();
    },[ newQueryReq ]);

    return { gettingQueryData,queryData,setNewQueryReq };
};

export default useQueryById;