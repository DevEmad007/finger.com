import { getFirestore,doc,setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSetData = () => {
    const [ success,setSuccess ] = useState(false);
    const db = getFirestore();
    const navigate = useNavigate();

    const sentDataById = async (type,id,data,path,typeTwo,idTwo) => {
        try {
            if (!typeTwo == undefined) {
                await setDoc(doc(db,type,id,typeTwo,idTwo),data);
                setSuccess(true);
                navigate(path);
            }
            await setDoc(doc(db,type,id),data);
            navigate(path);
            setSuccess(true);
        } catch (error) {
            console.log(error);
        }
    };
    return { sentDataById,success };
};
export default useSetData

