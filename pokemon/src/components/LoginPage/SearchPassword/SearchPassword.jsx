import Input from "./InputPassword";
import { useState } from "react";
import { styled } from "styled-components";

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-family: "barcadebrawl", sans-serif;

  .search-wrapper {
    margin-top: 1rem;
  }
`;

const StyledSpan = styled.span`
    margin-top: 0.5rem;
    margin-bottom: -0.1rem
  }
`;

function SearchPassword(prop) {
  const { label, placeholder, onChange } = prop;
  const [values, setValues] = useState("");

  const onSeachChange = (value) => {
    setValues(value);
    onChange?.(value);
  };

  return (
    <StyledDiv>
      <StyledSpan>{label}</StyledSpan>
      <div className="search-wrapper">
        <Input
          placeholder={placeholder}
          onSeachChange={onSeachChange}
          value={values}
        />
      </div>
    </StyledDiv>
  );
}

export default SearchPassword;
