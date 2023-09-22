import { useEffect,useId,useRef,useState } from 'react';
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { setDoc,doc,getFirestore } from 'firebase/firestore';
import { RotatingLines } from 'react-loader-spinner';
import AddProductForm from './AdminForm';
import '../admin.css';

const Admin = () => {
    const randomId = useRef();
    const [ adding,setAdding ] = useState(false);
    const [ imageUrl,setImageUrl ] = useState();
    const [ itemData,setItemData ] = useState({
        name: '',
        id: '',
        img: '',
        price: '',
        description: ''
    });

    useEffect(() => {
        const min = 10000000; // Smallest 8-digit number
        const max = 99999999; // Largest 8-digit number
        randomId.current = Math.floor(Math.random() * (max - min + 1) + min);
        setItemData({ ...itemData,id: randomId.current });
    },[ adding ]);

    console.log(randomId.current);

    const storage = getStorage();
    const imagesRef = ref(storage,'productIMG/' + randomId.current);
    const [ img,setImg ] = useState();

    const handleChange = (e) => {
        const file = e.target.files[ 0 ];
        if (file.size > 1000000) {
            alert('The file is too large.');
            this.value = '';
        }
        setImg(file);
        const reader = new FileReader();
        reader.onload = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setItemData({
            ...itemData,
            img: `productIMG/${randomId.current}`
        });
    };

    const db = getFirestore();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setAdding(true);
        try {
            await setDoc(doc(db,'product',`${randomId.current}`),itemData);
        } catch (err) {
            console.log(err);
        }

        uploadBytes(imagesRef,img)
            .then((snapshot) => {
                console.log('Uploaded a blob or file!');
            })
            .catch((error) => {
                console.error('Error uploading image:',error);
            });
        setAdding(false);
        setItemData({});
        setImageUrl(undefined);
    };

    return (
        <div className='admin'>
            {adding ? <RotatingLines /> : <AddProductForm handleChange={handleChange}
                handleSubmit={handleSubmit}
                itemData={itemData}
                setItemData={setItemData}
                imageUrl={imageUrl} />}
        </div>
    );
};

export default Admin;
