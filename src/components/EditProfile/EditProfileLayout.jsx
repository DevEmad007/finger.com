import { useState } from 'react';
import ShowImage from '../ShowImage/ShowImage';
import { Navigate,useNavigate } from "react-router-dom";
import { getStorage,ref,uploadBytes } from "firebase/storage";
import useSetData from '../../hooks/useSetData/useSetData';

const EditProfileLayout = ({ profileData,user }) => {
    const storage = getStorage();
    const [ inputs,setInputs ] = useState(profileData);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[ 0 ];
        const imagesRef = ref(storage,`profileIMG/${user?.uid}`);
        uploadBytes(imagesRef,file)
            .then((snapshot) => {
                setInputs({
                    ...inputs,
                    imgURL: `profileIMG/${user?.uid}`
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
        sentDataById("profile",user?.uid,inputs);
    };

    return (
        <div className="profile">
            {success && <Navigate to={`/profile/${user.uid}`} />}
            <form className='profileDisplayContainer'>
                <div className="profileImgContainer">
                    <ShowImage classname={"profileImg"} imgRef={inputs?.imgURL} />
                    <label htmlFor="uploadImage" className='uploadImage'>Change</label>
                    <input hidden id='uploadImage' required className="imgUpload" type="file" accept="image/*" onChange={handleFileChange} />
                </div>
                <div className='profileDisplayInfoContainer'>
                    <input required
                        value={inputs?.displayName}
                        onChange={e => setInputs({ ...inputs,displayName: e.target.value })}
                        type="text" />
                    <p>{user?.email}</p>
                </div>
                <div className="profileEditBtn">
                    <button
                        onClick={() => navigate(`/profile/${user.uid}`)}
                        className='globleLinkStyle'>
                        cancle
                    </button>
                    <button
                        onClick={handleSave}
                        className='globleLinkStyle'>
                        Save
                    </button>
                </div>
            </form>
            <form className='profileInfo'>
                <div className="profileInfoItem">
                    <label>Proffession :</label>
                    <input required
                        value={inputs?.proffession}
                        onChange={e => setInputs({ ...inputs,proffession: e.target.value })}
                        type="text" />
                </div>
                <div className="profileInfoItem">
                    <label>Bio :</label>
                    <input required
                        value={inputs?.bio}
                        onChange={e => setInputs({ ...inputs,bio: e.target.value })}
                        type="text" />
                </div>
                <div className="profileInfoItem">
                    <label>Number :</label>
                    <input required
                        value={inputs?.number}
                        onChange={e => setInputs({ ...inputs,number: e.target.value })}
                        type="number" />
                </div>
                <div className="selectionContainer">
                    <label>Gender :</label>
                    <select value={inputs?.gender} onChange={e => setInputs({ ...inputs,gender: e.target.value })} >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </form>
        </div >
    );
};

export default EditProfileLayout;
