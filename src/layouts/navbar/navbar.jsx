import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import style from "./navbar.module.scss";

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="1">
        <a href="/profile">Profile</a>
      </Menu.Item>
      <Menu.Item key="2">
        <a href="/settings">Settings</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.navbar}>
      <div className={style.navbar_left}>
        <div>
          <Dropdown overlay={menu} trigger={['click']}>
            <Button type="text" className="logo-button">
              <span className={style.logo_text}>CORN</span> <DownOutlined />
            </Button>
          </Dropdown>
        </div>
        <div>
          <button className={style.nav_text}>Trade</button>
          <button className={style.nav_text}>Explore</button>
          <button className={style.nav_text}>Pool</button>
        </div>
      </div>
      <button className={style.nav_button}>AUTHENTICATE</button>
    </div>
  );
};

export default Navbar;
