import { doc,deleteDoc,} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";

const useDeleteData = () => {
    const db = getFirestore();
    const [ deleting,setDeleting ] = useState(false);

    const deleteDocument = (type,id) => {
        deleteDoc(doc(db,type,id?.toString()))
            .then(res => {
                setDeleting(true);
            });
    };
    return { deleteDocument,deleting };
};

export default useDeleteData;
