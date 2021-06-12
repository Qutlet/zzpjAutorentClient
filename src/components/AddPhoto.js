import {useState} from 'react';
import storage from './firebase';


function Add({id}) {
const [image , setImage] = useState('');
const upload = ()=>{
  if(image == null)
    return;
  storage.ref(`${id}`).put(image).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  });
}
  
  return (
    <div className="Add">
      <center>
      <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
      <button onClick={upload}>Upload</button>
      </center>
    </div>
  );
}
//storage.refFromURL('gs://autorent-a82d9.appspot.com/'+ id + '.jpg');
  
export default Add;