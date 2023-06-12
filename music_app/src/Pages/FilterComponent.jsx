import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
 const intialSortParam = searchParams.get("sortBy")

 const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(intialSortParam || "");
  const handlGenreChange = (e) => {
    const option = e.target.value;

    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };
  //console.log(category)

  const handleSortBy = (e) => {


    setSortBy(e.target.value);
    //console.log(sortBy);
  };

  useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ genre: category,
    sortBy: sortBy
 });
    }
  }, [category, setSearchParams, sortBy]);

 // console.log(searchParams.getAll("genre"));



  return (
    <Box>
      <Text fontSize="3xl">FILTER</Text>
      <Box>
        <input
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">K-Pop</label>
      </Box>
      <Box>
        <input
          defaultChecked={category.includes("Country")}
          value="Country"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">Country</label>
      </Box>
      <Box>
        <input
          defaultChecked={category.includes(" Hard Rock")}
          value=" Hard Rock"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">Hard Rock</label>
      </Box>
      <Box>
        <input
          defaultChecked={category.includes("Holiday")}
          value="Holiday"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">Holiday</label>
      </Box>
      <Box>
        <input
          defaultChecked={category.includes("Christmas")}
          value="Christmas"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">Christmas</label>
      </Box>
      <Box>
        <input
          defaultChecked={category.includes("Heavy Metal")}
          value="Heavy Metal"
          onChange={handlGenreChange}
          type="checkbox"
        />
        <label htmlFor="">Heavy Metal</label>
      </Box>

      <Text fontSize="3xl">SORT</Text>
      <div onChange={handleSortBy}>
        <Box>
          <input defaultChecked={sortBy ==="asc"} name="sortBy" type="radio" value="asc" />
          <label htmlFor="">Ascending</label>
        </Box>
        <Box>
          <input defaultChecked={sortBy ==="desc"} type="radio" name="sortBy" value="desc" />
          <label htmlFor="">Descending</label>
        </Box>
      </div>
    </Box>
  );
};

export default FilterComponent;
