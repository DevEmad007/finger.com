import { getStorage,ref,uploadBytes } from "firebase/storage";

const useUpload = () => {
    const storage = getStorage();
    const [ img,setImg ] = useState();
    const imagesRef = ref(storage,'profileIMG/' + user?.uid);

    uploadBytes(imagesRef,file)
        .then((snapshot) => {
            console.log('Uploaded a blob or file!');
        })
        .catch((error) => {
            console.error('Error uploading image:',error);
        });
};

export default useUpload;
