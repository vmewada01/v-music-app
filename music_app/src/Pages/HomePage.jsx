import React from 'react'
import FilterComponent from './FilterComponent'
import MusicRecords from './MusicRecords'
import { Box, Flex } from '@chakra-ui/react'


const HomePage = () => {
  return (
    <Flex>
        <Box height='100%' width='220px' border='1px solid brown' p='1rem'>
        <FilterComponent/>
        </Box>
        <Box height='100%' width='100%' border='1px solid blue'p='1rem'>
        <MusicRecords/>
        </Box>
    </Flex>
  )
}

export default HomePage

