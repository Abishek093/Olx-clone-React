// import React, { useContext, useEffect, useState } from 'react';
// import { db } from '../../firebase/config';
// import './View.css';
// import { postContext } from '../../store/postContext';
// import { doc, getDoc  } from "firebase/firestore";


// function View() {
//   const [useDetails, setUseDetails] = useState()
//   const {postDetails} = useContext(postContext)

//   useEffect(() => {
//     const { userId } = postDetails || {};
//     if (userId) {
//       const userDocRef = doc(db, 'users', userId);

//       const getUserDetails = async () => {
//         const docSnap = await getDoc(userDocRef);

//         if (docSnap.exists()) {
//           setUseDetails(docSnap.data());
//           console.log(useDetails);

//         } else {
//           console.log('No such document!');
//         }
//       };

//       getUserDetails();

//     }
//   });


//   return (
//     <div className="viewParentDiv">
//       <div className="imageShowDiv">
//       <img
//           src={postDetails ? postDetails.url : 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg' }
//           alt=""
//         />
//       </div>
//       <div className="rightSection">
//       <div className="productDetails">
//           <p>&#x20B9; {postDetails ? postDetails.price : ''}</p>
//           <span>{postDetails ? postDetails.name : 'Sorry'}</span>
//           <p>{postDetails ? postDetails.category : ''}</p>
//         </div>
//         <div className="contactDetails">
//           <p>Seller details</p>
//           <p>No name</p>
//           <p>1234567890</p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default View;
import React, { useContext, useEffect, useState } from 'react';
import { db } from '../../firebase/config';
import './View.css';
import { postContext } from '../../store/postContext';
import { doc, getDoc  } from "firebase/firestore";

function View(
) {
  const [useDetails, setUseDetails] = useState();
  const { postDetails } = useContext(postContext);

  useEffect(() => {
    const { userId } = postDetails || {};
    if (userId) {
      const userDocRef = doc(db, 'users', userId);

      const getUserDetails = async (
) => {
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          setUseDetails(docSnap.data());
          console.log(useDetails);
        } else {
          console.log('No such document!');
        }
      };

      getUserDetails();
    }
  }, [postDetails]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
      <img
          src={postDetails ? postDetails.url : 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg' }
          alt=""
        />
      </div>
      <div className="rightSection">
      <div className="productDetails">
          <p>&#x20B9; {postDetails ? postDetails.price : ''}</p>
          <span>{postDetails ? postDetails.name : 'Sorry'}</span>
          <p>{postDetails ? postDetails.category : ''}</p>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>Name: {useDetails ? useDetails.name : 'Abishek'}</p>
          <p>Phone: {useDetails ? useDetails.phone : '1234567890'}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
