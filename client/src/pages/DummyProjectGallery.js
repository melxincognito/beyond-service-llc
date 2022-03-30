import React from "react";
import { storage } from "../firebase-config";
import { ref, listAll } from "firebase/storage";

const listRef = ref(storage, "images/");

listAll(listRef)
  .then((res) => {
    res.prefixes.forEach((folderRef) => {
      console.log(folderRef);
    });
    res.items.forEach((itemRef) => {
      console.log(itemRef);
    });
  })
  .catch((err) => {
    console.log(err);
  });

export default function DummyProjectGallery() {
  return <div></div>;
}
