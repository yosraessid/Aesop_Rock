import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function TestFirebase() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "albums"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setAlbums(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Albums dans Firestore :</h2>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.nom || "Sans nom"}</li>
        ))}
      </ul>
    </div>
  );
}

export default TestFirebase; 