import { collection,getDocs } from "firebase/firestore";
import { useEffect,useState } from 'react';
import { getFirestore } from "firebase/firestore";

const useGetData = (type) => {
    const db = getFirestore();
    const [ data,setData ] = useState();
    const [ gettingData,setGettingData ] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db,type));
                setData(querySnapshot.docs);
                setGettingData(false);
            } catch (e) {
                console.log(e);
            }
        };
        if (gettingData) {
            getData();
        }
        return () => { data; };
    },[]);
    return { gettingData,data };
};

export default useGetData;