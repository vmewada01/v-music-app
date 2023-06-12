import { Heading, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { update } from "../Redux/AuthReducer/action";
import { getMusicRecord } from "../Redux/AppReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicRecord = useSelector((store) => store.AppReducer.musicRecords);

  const [musicName, setMusicName] = useState("");
  const [artistName, setArtistName] = useState("");

  useEffect(() => {
    if (id) {
      const currentMusic = musicRecord.find((album) => album.id === id);
      //console.log(currentMusic);
      if (currentMusic) {
        setArtistName(currentMusic.name);
        setMusicName(currentMusic.artist);
      }
    }
  }, [id, musicRecord]);

  console.log(musicName, artistName);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (musicName && artistName) {
      const payload = {
        name: musicName,
        artist: artistName,
      };
      dispatch(update(id, payload)).then(()=> {
       dispatch(getMusicRecord())
      })
    }
  };

  return (
    <div>
      <Heading>EditMusicRecord</Heading>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Edit Music Name :- </label>
          <input
            style={{ border: "1px solid black" }}
            value={musicName}
            onChange={(e) => setMusicName(e.target.value)}
          />
        </div>
        <div>
          <label>Edit Artist Name :- </label>
          <input
            style={{ border: "1px solid black" }}
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditMusicRecord;
