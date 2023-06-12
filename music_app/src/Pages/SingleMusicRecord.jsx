import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";
import { Button } from "@chakra-ui/react";

const SingleMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicRecord = useSelector((store) => store.AppReducer.musicRecords);
  const [currentAlbum, setCurrentAlbum] = useState({});

  console.log(musicRecord);
  useEffect(() => {
    if (musicRecord.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch, musicRecord.length]);

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecord.find((album) => album.id === id);
      console.log(currentMusic);
      currentMusic && setCurrentAlbum(currentMusic);
    }
  }, [id, musicRecord]);

  return (
    <div>
      <div  style={{display:"flex", width:"500px", flexDirection:"column" , justifyContent:"center", alignContent:"center", alignItems:"center", margin: "auto"}}>
        <div>
          {" "}
          <img  src={currentAlbum.img} alt="img" />
        </div>
        <div>
          {" "}
          <h1>{currentAlbum.artist} </h1>
        </div>
        <div>
          {" "}
          <h1>{currentAlbum.name} </h1>
        </div>
        <div>
          {" "}
          <h1>{currentAlbum.genre}</h1>
        </div>
        <div>
          {" "}
          <h1>{currentAlbum.year}</h1>
        </div>
        <div>
          {" "}
       <Button> <Link to={`/music/${id}/edit`}>Edit</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default SingleMusicRecord;
