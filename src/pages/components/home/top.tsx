import { QuestionCircleOutlined, ReadOutlined,LogoutOutlined} from "@ant-design/icons";
import { Menu, Typography,Switch,Tooltip } from "antd";
import Link from "next/link";

const {Item} = Menu;

const Top = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}  >
         <Typography style={{color:"green",fontSize:23,fontWeight:"bold"}}>Ai Avatara </Typography>
          <Menu style={{width:400,display:"flex"}}   >
            
            <Item  >
                  <Switch checkedChildren="Dark" unCheckedChildren="Light" defaultunChecked />
            </Item>
            <Item>
            <Tooltip placement="top" color={'green'}title="Avatara Book" >
              <Link href="/components/content/avatarabook"  >
            
              <ReadOutlined />
             
              </Link>
              </Tooltip>
            </Item>
            
            <Item>
            <Tooltip  color={'green'} title="About us">
              <Link href="/components/content/about" >
              <QuestionCircleOutlined />
              </Link>
              </Tooltip>
            
            </Item>
            
            {/* <Item>
            <Tooltip title="Logout">
            <LogoutOutlined/>
              </Tooltip>
            </Item> */}
          </Menu>

    </div>
  )
}

export default Top;