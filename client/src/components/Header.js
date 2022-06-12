import React from 'react'
import {Menu} from "antd"
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Menu mode='horizontal'>
        <Menu.Item>
            <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link to="/new">New</Link>
        </Menu.Item>
        <Menu.SubMenu title="other">
          <Menu.Item>asd</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    )
   
      
}

export default Header