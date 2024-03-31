  import React, { Fragment, useContext, useState } from 'react';
  import './Create.css';
  import Header from '../Header/Header';
  import { FirebaseContext, AuthContext } from '../../store/Context';
  import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
  import {auth, db, storage} from '../../firebase/config'
  import { addDoc, collection } from 'firebase/firestore';
  import { useNavigate } from 'react-router-dom';

  const Create = () => {  
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState(null)
    // const { Firebase, auth, db, storage } = useContext(FirebaseContext);
    const navigate = useNavigate();


    const { user } = useContext(AuthContext);

    const handleSubmit = async () => {
      const storageRef = ref(storage, `images/${image.name}`);
    
      try {
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);
        console.log(url);
        const doc = {
          name : name,
          category: category,
          price: price,
          url : url,
          user : user.uid,
          createdAt: new Date().toLocaleDateString()
        }

        const setDoc = await addDoc(collection(db, 'products'), doc)
        console.log(setDoc);
        navigate('/')
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <label htmlFor="fname">Name</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          onChange={(e) => {
            setName(e.target.value);
          }}
          name="Name"
          value={name}
        />
        <br />
        <label htmlFor="fname">Category</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          name="category"
          value={category}
        />
        <br />
        <label htmlFor="fname">Price</label>
        <br />
        <input
          className="input"
          type="number"
          id="fname"
          name="Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <br />

        <br />
        <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''}></img>
        <br />
        <input type="file" onChange={(e) => {
          setImage(e.target.files[0]);
        }} />
        <br />
        <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
      </div>
    </Fragment>
  );
};

export default Create;
