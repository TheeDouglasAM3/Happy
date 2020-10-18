import styled from 'styled-components'

import imgBackground from '../../images/landing.svg'

export const Container = styled.div`
  #page-landing {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(329.54deg, ${props => props.theme.colors.backgroundStart} 0%, ${props => props.theme.colors.backgroundEnd} 100%);

    /** Centralizar tanto horizontalmente quanto verticalmente*/
    display: flex;
    justify-content: center; 
    align-items: center;
  }

  #page-landing .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 560px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${imgBackground}) no-repeat 65% center;
    background-size: auto 560px;
  }

  #page-landing .content-wrapper main {
    max-width: 350px;  
  }

  #page-landing .content-wrapper main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  #page-landing .content-wrapper main p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }

  .content-wrapper .location {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;

    text-align: right;
  }

  .content-wrapper .location strong {
    font-weight: 800;
  }

  .content-wrapper .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: ${props => props.theme.colors.button};
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
  }

  .content-wrapper .enter-app:hover {
    background: ${props => props.theme.colors.buttonHover};
  }
`