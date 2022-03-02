import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
      label='Search'
      variant="standard"
      fullWidth
      type='search'
      value={value}
      onChange={onChange}
    />;
};

export default Search;