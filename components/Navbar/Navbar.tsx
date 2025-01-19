import React from 'react'
import { Image, Text } from 'react-native'
import './Navbar.css'
import { Icon, Radio } from '@ant-design/react-native';
import { colors } from '@/utils/colors';
import CoinSwitch from '../CoinSwitch/CoinSwitch';
import { Container } from '../Container/Container';

interface NavbarTypes {
    isDefault?:Boolean;
    title?:string;
    isHome?:Boolean
}

const Navbar = ({isDefault,title="Home", isHome=false}:NavbarTypes) => {
  return (
    <Container bg={colors.navBg}>
<div className='navbar'>
        {
            isDefault ? 
            <a href='/'>
              <span>{isHome ? "sdfsdf" :<p className='title'></p>}
              <Image style={{}} source={require('../../assets/images/logo.png')} /></span>
            </a>
            : <p className='title flex'><a href="/" style={{fontSize:'30px'}}><span>{"<"}</span></a>{title}</p>
        }
        <div>
            <CoinSwitch />
        </div>
    </div>
    </Container>
    
  )
}

export default Navbar