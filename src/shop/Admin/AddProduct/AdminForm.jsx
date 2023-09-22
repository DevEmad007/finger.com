import React from 'react';

const AddProductForm = ({ handleSubmit,handleChange,itemData,setItemData,imageUrl }) => {
    return (
        <div className='adminFormContainer'>
            <form onSubmit={handleSubmit}>
                <h1 style={{ color: 'var(--color-two)' }}>Add New Product</h1>
                <div>
                    <label htmlFor='uploadImage'>Product Image</label>
                    <label style={{ cursor: 'pointer' }} htmlFor='uploadImage'>Upload Image</label>
                    <input
                        hidden
                        id='uploadImage'
                        required
                        onChange={handleChange}
                        type="file"
                        accept="image/*" />
                </div>
                <div>
                    <label >Product Name</label>
                    <input
                        required
                        value={itemData.name}
                        type="text"
                        onChange={e => setItemData({ ...itemData,name: e.target.value })} />
                </div>
                <div>
                    <label >Price</label>
                    <input
                        required
                        value={itemData.price}
                        onChange={e => setItemData({ ...itemData,price: e.target.value })} type="number" />
                </div>
                <div>
                    <label >Discription</label>
                    <input
                        required
                        value={itemData.description}
                        onChange={e => setItemData({ ...itemData,description: e.target.value })} type="text" />
                </div>
                <div>
                    <button className='addProduct' type='submit'>
                        Add Product
                    </button>
                </div>
            </form>
            {imageUrl !== undefined && <img src={imageUrl} alt='kfs' style={{ width: '200px',height: '200px' }} />}
        </div>
    );
};

export default AddProductForm;
