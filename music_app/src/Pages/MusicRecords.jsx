import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusicRecord } from "../Redux/action";
import { Box, Image } from "@chakra-ui/react";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const musicData = useSelector((store) => store.musicRecords);

  useEffect(() => {
    if (musicData.length === 0) {
      dispatch(getMusicRecord());
    }
  }, []);
  console.log(musicData);
  return <Box display='grid' gridTemplateColumns='repeat(3,1fr)' gridTemplateRows="repeat(3,1fr)" gap='1rem' >
{ musicData.length>0 && musicData.map((album)=> {
    return (

        <Box key={album.id} display='flex' justifyContent='center' flexDirection='column' alignContent='center' alignItems="center" gap='.25rem' border='1px solid green'>
             <Box><Image src={album.img} /> </Box>
             <Box>Name :  {album.name}</Box>
             <Box>Artist:  {album.artist}</Box>
             <Box>Genre: {album.genre}</Box>
             <Box>No of Songs: {album.no_of_songs}</Box>
             <Box>Album: {album.year}</Box>
             </Box>
    )
      
 
}) }
  </Box>
};

export default MusicRecords;
