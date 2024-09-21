import { useState } from "react";
import { Input, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Arrow from "../../../assets/icons/Background+Border.svg"
import Ethereum from "../../../assets/icons/Ethereum.svg"
import style from "./InputFirst.module.scss";

const InputFirst = () => {

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
      <label>Sell</label>
      <div className={style.inputWrapper}>
        <Input
          type="number"
          value={value}
          onChange={handleInputChange}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={inputClassName}
        />
        <Button className={style.tokenButton} icon={<img src={Ethereum} alt={Ethereum} />}>
          <DownOutlined />
        </Button>
      </div>
      <img src={Arrow} alt={Arrow} />
    </div>
  );
};

export default InputFirst;
