import React from 'react';
import { Link } from 'react-router-dom';
import useDeleteData from '../../../hooks/Delete Data/useDeleteData';
import ShowImage from '../../../components/ShowImage/ShowImage';

const DashBoardItem = ({ data }) => {
    const { deleteDocument,deleting } = useDeleteData();
    const handleDelete = () => {
        deleteDocument('product',data.id.toString());
    };

    return (
        <>
            {deleting ?
                (<div style={{ display: 'block' }} className="item" >
                    <h2 style={{ textAlign: 'center' }}>deleted</h2>
                </div>)
                :
                (<div className="item" >
                    <div>
                        <ShowImage classname={'dashboardImage'} imgRef={data.img} />
                        <h2>{data.name}</h2>
                    </div>
                    <div>
                        <p><b>{data.price} TK</b></p>
                        <div className='btnContainer'>
                            <Link to={`edit/${data.id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>)}
        </>
    );
};

export default DashBoardItem;
