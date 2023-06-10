import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const FilterComponent = () => {

const [category, setCategory]= useState([])

const handlGenreChange= (e)=>{
     const option = e.target.value 
     
}

  return (
    <Box>
      <Text fontSize='3xl'>FILTER</Text>
        <Box>
            <input defaultChecked={category.includes("K-Pop")} value="K-Pop" onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">K-Pop</label>
        </Box>
        <Box>
            <input defaultChecked={category.includes("Country")} value="Country"  onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">Country</label>
        </Box>
        <Box>
            <input defaultChecked={category.includes("Hard Rock")} value='Hard Rock'  onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">Hard Rock</label>
        </Box>
        <Box>
            <input defaultChecked={category.includes("Holiday")} value='Holiday'  onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">Holiday</label>
        </Box>
        <Box>
            <input defaultChecked={category.includes("Christmas")} value="Christmas"  onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">Christmas</label>
        </Box>
        <Box>
            <input defaultChecked={category.includes("Heavy Metal")} value="Heavy Metal"  onChange={handlGenreChange} type="checkbox" />
            <label htmlFor="">Heavy Metal</label>
        </Box>

     <Text  fontSize='3xl'>SORT</Text>
    </Box>
  )
}

export default FilterComponent