import React from 'react';
import styled from 'styled-components';
import TutorNext from '../img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsIcon from '@mui/icons-material/Sports';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import FeedIcon from '@mui/icons-material/Feed';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {Link} from 'react-router-dom'

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bg};
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items:center;
    gap: 20px;
    cursor: pointer;
    padding: 7.5px 0px;
`;

const Hr = styled.hr`
    margin: 15px opx;
    border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div``;
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Title = styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`;

function Menu({darkMode, setDarkMode}) {
  return (
    <Container>
      <Wrapper>
      <Link to='/' style={{textDecoration: "none", color: "inherit"}}>
          <Logo>
              <Img src={TutorNext}/>
              TutorNext
          </Logo>
        </Link>
        <Item><HomeIcon/>Home</Item>
        <Item><ExploreIcon/>Explore</Item>
        <Item><SubscriptionsIcon/>Subscription</Item>
        <Hr/>
        <Item><VideoLibraryIcon/>Library</Item>
        <Item><HistoryIcon/>History</Item>
        <Hr/>
        <Login>
        SignIn to Like, Comment & Subscribe.
        <br/>
        <Button><AccountCircleOutlinedIcon/>SIGN IN</Button>
        </Login>
        <Hr/>
        <Title>Best of TutorNext</Title>
        <Item><LibraryMusicIcon/>Music</Item>
        <Item><SportsIcon/>Sports</Item>
        <Item><SportsEsportsIcon/>Gaming</Item>
        <Item><MovieCreationIcon/>Movies</Item>
        <Item><FeedIcon/>News</Item>
        <Item><LiveTvIcon/>Live</Item>
        <Hr/>
        <Item><SettingsIcon/>Settings</Item>
        <Item><ReportIcon/>Report</Item>
        <Item><PsychologyAltIcon/>Help</Item>
        <Item onClick={()=> setDarkMode(!darkMode)}><DarkModeIcon/>Light Mode</Item>
      </Wrapper>
    </Container>
  )
}

export default Menu;