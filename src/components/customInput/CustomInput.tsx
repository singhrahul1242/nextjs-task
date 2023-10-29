import React from "react";
import { Text, Input, Select, Box } from "@chakra-ui/react";

interface CustomInputInterface {
  option: string[];
  value: string;
  title: string;
  dropdown: boolean;
  placeholder: string;
  error: string;
  handelChange: any;
  touched: any;
}

const CustomInput = ({
  option,
  value,
  title,
  dropdown,
  placeholder,
  error,
  handelChange,
  touched,
  name = "",
}: any) => {
  return (
    <Box>
      <Text mb="8px">{title}</Text>
      {dropdown ? (
        <Input
          value={value}
          onChange={handelChange}
          placeholder={placeholder}
          size="sm"
          name={name}
          key={name}
        />
      ) : (
        <Select
          value={value}
          onChange={handelChange}
          placeholder="Select option"
          size="sm"
        >
          {option.map((opt: any, index: any) => (
            <option key={index} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      )}
      {error && (
        <Text mb="4px" color="red">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default CustomInput;
