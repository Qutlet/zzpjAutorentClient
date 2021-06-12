import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import car_logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import SubmitButton from './SubmitButton'
import UserStore from './Stores/UserStore'

const NavItem = styled.div`
    margin-left: 30px;
    color: white;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
    &:hover {
        color: black;
    }
    color: white;
`

const NavButton = styled.div`
    position: absolute;
    right: 30px;
    color: white;
    border: 2px solid white;
    padding: 10px;
    border-radius: 10%;

    &:hover{
        cursor: pointer;
        background-color: white;
        &:hover {
            ${StyledLink} {
                color: black;
            }
        }
        
    }
`

export default class Navbar extends Component{
    logout = () => {
        UserStore.logout()
        this.props.history.push('/login');
        console.log(this.props);
    }

    renderLoggedInNav = () => {
        return (
            <NavWrapper className="nav-bar"> 
                <StyledLink to='/'>
                    <img src={car_logo} alt="store" className="nav-img"/>
                </StyledLink>
                <StyledLink to="/avaliableOffers">
                    <NavItem>Oferty</NavItem>
                </StyledLink>
                <StyledLink to="/add-car">
                    <NavItem>Dodaj samochod</NavItem>
                </StyledLink>
                <StyledLink to="/offers">
                    <NavItem>Dodaj oferte</NavItem>
                </StyledLink>
                <StyledLink to="/cars">
                    <NavItem>Moje samochody</NavItem>
                </StyledLink>
                <StyledLink to="/myoffers">
                    <NavItem>Moje oferty</NavItem>
                </StyledLink>
                <StyledLink to="/myrents">
                    <NavItem>Moje wypożyczenia</NavItem>
                </StyledLink>
                {/* <StyledLink to="/messages">
                    <NavItem>Wiadomości</NavItem>
                </StyledLink> */}
                <NavButton>
                    <StyledLink onClick={this.logout} to="/login">
                        Wyloguj
                    </StyledLink>
                </NavButton>
            </NavWrapper>
        );
    }

    renderNotLoggedInNav = () => {
        return (
            <NavWrapper className="nav-bar"> 
                <Link to='/'>
                    <img src={car_logo} alt="store" className="nav-img"/>
                </Link>
                <NavButton>Zaloguj</NavButton>
            </NavWrapper>
        );
    }

    render(){
        //if (this.props.userdata.isLoggedIn()) {
           return this.renderLoggedInNav();
      //  } else {
        //    return this.renderNotLoggedInNav();
      //  } 
                {/*
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                        Samochody
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/add-car" className="nav-link">
                        Dodaj samochód
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/add-offer" className="nav-link">
                        Dodaj oferte
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/my-offer" className="nav-link">
                        Moje aktywne wyporzyczenia
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/messages" className="nav-link">
                        Wiadomości
                        </Link>
                    </li>
                </ul>
                <Link to="/favourites" className="ml-auto">
                    <ButtonContainer>
                        <span>
                            <i className="fas fa-heart" />
                        </span>
                        Polubione
                    </ButtonContainer>
                </Link>

            <Link to="/login" className="ml-left">
            <ButtonContainer onClick={this.logout}>
                Wyloguj
            </ButtonContainer>
        </Link>*/}
    }
}

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3rem;
        text-transform:capitalze;
}
`