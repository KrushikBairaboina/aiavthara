import { HomeOutlined,IdcardOutlined,UserOutlined, UsergroupAddOutlined  } from "@ant-design/icons";
import {  Menu, Typography} from "antd";
import Link from "next/link";

const {Item} = Menu;

const Sidebar = () => {
  return (
    <div>
      <Menu  mode={"vertical"} >
    <Item>
     <Link href="/">
      
     <Typography style={{color:"black"}}><HomeOutlined/> Home</Typography>
     </Link>
    
    </Item>
    <Item>
    
    <Link href="/components/content/wallposter" >
    <Typography style={{color:"black"}}><IdcardOutlined/> Wallposter</Typography>
    </Link>
    </Item>
    <Item>
    
    <Link href="/components/content/create" >
    <Typography style={{color:"black"}}><UsergroupAddOutlined/> Create</Typography>
    </Link>
    </Item>
    <Item>
    <Link href="/components/content/account" >
    <Typography style={{color:"black"}}> <UserOutlined /> Account</Typography>
    </Link>
    </Item>
  </Menu> 
  </div>
  )
}

export default Sidebar;