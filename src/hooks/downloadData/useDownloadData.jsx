import React,{ useEffect,useState } from 'react';
import { getStorage,ref,getDownloadURL } from "firebase/storage";


const useDownloadData = (pathRef) => {
    const storage = getStorage();
    const [ downloadedData,setDownloadedData ] = useState();
    const [ message,setMessage ] = useState('');
    const [ downloadingData,setDownloadingData ] = useState(true);

    useEffect(() => {
        if (!pathRef) {
            return;
        }
        const imagesRef = ref(storage,pathRef);
        getDownloadURL(imagesRef)
            .then((url) => {
                setDownloadedData(url);
                setDownloadingData(false);
            })
            .catch((error) => {
                console.log(error);
                switch (error.code) {
                    case 'storage/object-not-found':
                        setMessage("File doesn't exist");
                        break;
                    case 'storage/unauthorized':
                        setMessage('User does not have permission to access the object');
                        break;
                    case 'storage/canceled':
                        setMessage(' User canceled the upload');
                        break;
                    case 'storage/unknown':
                        setMessage('Unknown error occurred, inspect the server response');
                        break;
                }
            });
    },[ pathRef ]);
    return { downloadedData,message,downloadingData };
};

export default useDownloadData;
