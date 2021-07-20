import React, {useState,useEffect} from 'react';
import './App.css';
import logo from './assets/Instagram.png';
import Post from './Component/Post/Post';
import Modal from './Component/Modal/Modal';
import {db , auth} from './firebase';
import Button from './Component/Button/Button';
import Input from './Component/Input/Input';
function App() {
  const [posts, setPosts] = useState([]);
  const [open ,setOpen] = useState(false);
  const [username ,setUsername] = useState('');
  const [password ,setPassword] = useState('');
  const [email ,setEmail] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() =>{
      db.collection("posts").onSnapshot( snapshot =>{
        setPosts(snapshot.docs.map( doc =>({
          post: doc.data(),
          id:doc.id
          }) ));
      })
  },[]);

  
  const signUp = (event) =>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((authUser) => {
      console.log(authUser);
      return authUser.user.updateProfile({
         displayName: username
       });
     } )
    // .catch( (error) => alert(error.message));
    
  }

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged((authUser) =>{
      console.log("authUser");
        if(authUser){
          console.log(authUser);
          console.log("USER");
          setUser(authUser);
        } else {
          setUser(null);
          console.log("NULL");
        }

      })
      return () =>{
        unsubscribe();
      }
  },[user,username]);
  return (
    <div className="App">
      <Modal show={open} modalClosed={() => setOpen(false)}> 
          <center>
          <img  className="app__headerimage"
          src={logo} alt="logo"/> 
          <form>
          <Input  inputtype="input" 
                  type="text" 
                  label="Username" 
                  name="Username" 
                  placeholder="Username"
                  onChange={ (e) => setUsername(e.target.value) }
                  />

          <Input  inputtype="input" 
                  type="Email" 
                  label="email" 
                  name="email" 
                  placeholder="Email"
                  onChange={ (e) => setEmail(e.target.value) }
                  />

          <Input  inputtype="input" 
                  type="password" 
                  label="Password" 
                  name="email" 
                  placeholder="Password"
                  onChange={ (e) => setPassword(e.target.value) }

                  />

           <Button type="submit" onClick={signUp}>Sign Up</Button>

          </form>
          </center>
         

      </Modal>

      <div className="app__header">
        <img  className="app__headerimage"
        src={logo} alt="logo"/> 
      </div>
      {user ?
     (<Button  onClick={() => auth.signOut()}>Logout</Button>):
     (<Button  onClick={() => setOpen(true)}>Sign Up</Button>)
      }

      {
        posts.map( ({id,post}) =>{
           return( <Post 
            key = {id}
            imageUrl = {post.imageUrl}
            caption = {post.caption}  
           username={post.username} /> );
        } )
      }
      
    </div>
  );
}

export default App;
