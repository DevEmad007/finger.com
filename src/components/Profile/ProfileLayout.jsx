import { Edit,Logout,LogoutRounded,LogoutTwoTone } from '@mui/icons-material';
import { useAuth } from '../../hooks/auth/useAuth';
import { Link } from 'react-router-dom';
import ShowImage from '../ShowImage/ShowImage';

function ProfileLayout({ profileData,uidAsParam }) {

    const { authLogOut,user } = useAuth();
    const handleLogOut = () => {
        authLogOut();
    };

    return (
        <>
            <div className='profileDisplayContainer'>
                <div className="profileImgContainer">
                    <ShowImage classname={'profileImg'} imgRef={profileData?.imgURL} />
                </div>
                <div className='profileDisplayInfoContainer'>
                    <h2>{profileData?.displayName}</h2>
                    <p>{uidAsParam.profileID === user.uid && user?.email}</p>
                </div>
                <div className="profileEdit">
                    {
                        uidAsParam.profileID === user.uid &&
                        <Link to={`/profile/edit/${user.uid}`} className='globleLinkStyle editlink'><Edit /></Link>
                    }
                </div>
            </div>
            <div className='profileInfo'>
                <div className="profileInfoItem">
                    <span>Proffession :</span><p>{profileData?.proffession}</p>
                </div>
                <div className="profileInfoItem">
                    <span>Bio :</span><p>{profileData?.bio}</p>
                </div>
                <div className="profileInfoItem">
                    <span>Number :</span><p>{profileData?.number}</p>
                </div>
                <div className="selectionContainer">
                    <span>Gender :</span>
                    <p>{profileData?.gender}</p>
                </div>
            </div>
            <div >
                {uidAsParam.profileID === user.uid &&
                    (
                        <button className="logOut" type='button' onClick={handleLogOut}>
                            <b>Log Out</b>
                            <LogoutRounded />
                        </button>
                    )
                }
            </div>
        </>
    );
}

export default ProfileLayout;