import { useState } from "react";
import { Input, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import style from "./InputSecond.module.scss";

const InputSecond = () => {

  const [value, setValue] = useState("0");
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const inputClassName = (value !== "0" && value !== "") || isHovered ? style.inputField : style.emptyInput;

  return (
    <div className={style.inputContainer}>
      <label>Buy</label>
      <div className={style.inputWrapper}>
        <Input
          type="number"
          value={value}
          onChange={handleInputChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={inputClassName}
        />
        <Button className={style.tokenButton} >Select token
          <DownOutlined />
        </Button>
      </div>
    </div>
  );
};

export default InputSecond;