import { Avatar, Button, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ChatIcon from '@mui/icons-material/Chat'
import MoreVerticalIcon from '@mui/icons-material/MoreVert'
import LogoutIcon  from '@mui/icons-material/Logout'
import SearchIcon  from '@mui/icons-material/Search'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

const StyledContainer = styled.div`
    height: 100vh;
    min-width: 300px;
    max-width: 350px;
    overflow-y: hidden ;
    border-right: 1px solid whitesmoke;
`
const StyledHeader = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    height: 80px;
    border-bottom: 2px solid whitesmoke;
    position: sticky; 
    top: 0; 
    background-color: white;
    z-index: 1;
`
const StyledSearch = styled.div`
    display: flex; 
    align-items: center;
    padding: 15px; 
    border-radius: 2px;
`
const StyledSidebarButton = styled(Button)`
    width:100%;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
`
const StyledUserAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`

const StyledSearchInput = styled.input`
    outline: none; 
    border: none; 
    flex: 1; 
`

const Sidebar = () => {

    const logOut = async () => {
        try {
            await signOut(auth)
        } catch (error) {
            console.log('Error logging out', error)
        }
    }

  return (
    <StyledContainer>
        <StyledHeader>
            <Tooltip title="User" placement='right'>
            <StyledUserAvatar />
            </Tooltip>
            
            <div>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVerticalIcon />
                </IconButton>
                <IconButton onClick={logOut}>
                    <LogoutIcon />
                </IconButton>
            </div>
        </StyledHeader>

        <StyledSearch>
            <SearchIcon />
            <StyledSearchInput placeholder="Search in conversation" />
        </StyledSearch>

        <StyledSidebarButton>
            Start a new conversation
        </StyledSidebarButton>

        {/* List of conversation */}
    </StyledContainer>
  )
}

export default Sidebar