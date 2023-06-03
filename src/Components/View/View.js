import React,{useEffect,useContext,useState} from 'react';

import './View.css';
import { postContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/firebaseContext';

function View() {
   
  const [userDetails,setUserDetails] = useState()
  const {postDetails} = useContext(postContext)
  const {firebase} = useContext(FirebaseContext)
 
  useEffect(() => {
    const { userId } = postDetails;
    console.log(userId,"pppppppppp",postDetails.userId);
    firebase
      .firestore()
      .collection('users')
      .where('id', '==', userId)
      .get()
      .then((response) => {
        console.log("response",response,"pppppppppppp");
        response.forEach(doc=> {
          console.log(doc.data(),"oooooooooooooooooooooo"); // Add this line to check the data
          setUserDetails(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting user details:", error);
      });
  }, [postDetails, firebase]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
          
        </div>
             
      {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.userName}</p>
          <p>{userDetails.phone}</p>
        </div>} 
      </div>
    </div>
  );
 
}
export default View;
