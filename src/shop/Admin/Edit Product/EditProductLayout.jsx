import { useState } from 'react';
import ShowImage from '../../../components/ShowImage/ShowImage';
import { Navigate,useNavigate } from "react-router-dom";
import { getStorage,ref,uploadBytes } from "firebase/storage";
import useSetData from '../../../hooks/useSetData/useSetData';

const EditProfileLayout = ({ data,user }) => {
    const storage = getStorage();
    const [ inputs,setInputs ] = useState(data);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[ 0 ];
        const imagesRef = ref(storage,`productIMG/${user?.uid}`);
        uploadBytes(imagesRef,file)
            .then((snapshot) => {
                setInputs({
                    ...inputs,
                    imgURL: `productIMG/${user?.uid}`
                });
                console.log('Uploaded  file!');
            })
            .catch((error) => {
                console.error('Error uploading image:',error);
            });
    };

    const { sentDataById,success } = useSetData();
    const handleSave = async (e) => {
        e.preventDefault();
        sentDataById("product",inputs.id.toString(),inputs);
    };

    return (
        <div className="editItem">
            {success && <Navigate to={'/shop/admin'} />}
            <form className='editItemForm'>
                <div className="itemImgContainer">
                    <ShowImage classname={'showImage'} imgRef={inputs.img} />
                    <label style={{ cursor: 'pointer' }} htmlFor="uploadImg">Change Image</label>
                    <input hidden id='uploadImg' required className="imgUpload" type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                <div className='itemInfoContainer'>
                    <div className="itemsInput">
                        <label>Name :</label>
                        <input required
                            value={inputs?.name}
                            onChange={e => setInputs({ ...inputs,name: e.target.value })}
                            type="text" />
                    </div>
                    <div className="itemsInput">
                        <label>Price :</label>
                        <input required
                            value={inputs?.price}
                            onChange={e => setInputs({ ...inputs,price: e.target.value })}
                            type="number" />
                    </div>
                    <div className="itemsInput">
                        <label>Discription :</label>
                        <textarea required
                            value={inputs?.description}
                            onChange={e => setInputs({ ...inputs,description: e.target.value })}
                            type="text">
                        </textarea>
                    </div>
                </div>
                <div className="EditBtn">
                    <button
                        onClick={handleSave}
                        className='globleLinkStyle'>
                        Save
                    </button>
                    <button
                        onClick={() => navigate('/shop/admin')}
                        className='globleLinkStyle'>
                        cancle
                    </button>
                </div>
            </form>
        </div >
    );
};

export default EditProfileLayout;
