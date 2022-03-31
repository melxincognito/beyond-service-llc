import * as React from "react";
import { storage } from "../firebase-config";
import { ref, getDownloadURL } from "firebase/storage";

const listRef = ref(storage, "images/79d0748c-5600-479b-8249-733bfc99a44c.JPG");

export default function DummyProjectGallery() {
  const [allImages, setImages] = React.useState([]);

  function getFromFirebase() {
    let storageRef = storage.ref();

    storageRef
      .listAll()
      .then(function (res) {
        res.items.forEach((imageRef) => {
          imageRef.ref.openStream().then((url) => {
            setImages((allImages) => [...allImages, url]);
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function dothis() {
    getDownloadURL(listRef).then((url) => {
      console.log(url);
      setImages([url]);
      console.warn(allImages);
      console.log(allImages.length);
    });
  }

  return (
    <div>
      <button onClick={dothis}> Click me </button>
      <div id="body">
        {allImages.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} width="130px" height="130px" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
