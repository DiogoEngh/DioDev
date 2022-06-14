@media screen and (max-width: 338px) {
    
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
  
  :root{
    --gray: rgb(47, 46, 68);
    --font-1: 'Montserrat', sans-serif;
    --font-size-1: 1.5rem;
    --font-size-2: 1.5rem;
    --button-size: 2.5rem;
    --dark: #0C0232;
  }
  /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
  
  #menu_lateral{
    position: absolute;
    top: 0rem;
    width: 0;
    background-color: var(--gray);
    right: 0;
    height: 66.5rem;
    transition: 0.3s all linear;
    z-index: 499;
  }
  
  
  /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
  
  header{
      width: 100%;
      height: 3.5rem;
      background-color: transparent;
      display: flex;
      align-items: center;
      transition: 0.3s all linear;
  }
  #slot_titulo{
      position: absolute;
      left: 0;
      height: 3.5rem;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: space-around;
  }
  #slot_menu{
      position: absolute;
      width: 60%;
      right: 0;
      height: 3.5rem;
      display: flex;
      align-items: center;
      justify-content:flex-end;
  }
  #titulo{
      font-family: var(--font-1);
      color: white;
      font-size: var(--font-size-1);
      z-index: 498;
  }
  #button_menu{
    position: relative;
    height: var(--button-size);
    width: var(--button-size);;
    background-color: transparent;
    margin: 0.5rem;
    cursor: pointer;
    z-index: 500;
  }
  #line_1,#line_2,#line_3{
    width: 2rem;
    height: 0.2rem;
    background-color: white;
    border-radius: 5px;
    transition: 0.3s all linear;
  }
  #line_1{
    position: absolute;
    top: 0.4rem;
  }
  #line_2{
    position: absolute;
    top: 1.1rem;
  }
  #line_3{
    position: absolute;
    bottom: 0.4rem;
  }
  
  /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
  
  main{
      width: 100%;
      height: 53rem;
      background-color: var(--gray);
      transition: 0.3s all linear;
  }
  #slidePrincipal{
    position: fixed;
    width: 100%;
    height: 15rem;
    top: 0rem;
    z-index: 400;
  }
  #nome{
    position: absolute;
    top: 5rem;
    left: 1rem;
    font-size: var(--font-size-2);
    font-family: var(--font-1);
    color: white;
    z-index: 401;
  }
  #tech{
    position: absolute;
    font-size: 1.5rem;
    width: 20%;
    left: 0rem;
    color: white;
    font-family: var(--font-1);
    margin-top: 1rem;
    opacity: 0;
    animation: tech 2s forwards;
  }
  @keyframes tech{
    to{
      left: 40%;
      opacity: 1;
    }
  }
  #skillsName{
    position: absolute;
    color: white;
    font-family: var(--font-1);
    top: 3.5rem;
    left: 1rem;
  }
  #skills{
    position: absolute;
    top: 15rem;
    height: 20rem;
    width: 100%;
    background-color: var(--dark);
    z-index: 402;
  }
  #Skill1{
    position: absolute;
    height: 4rem;
    width: 100%;
    margin-top: 5.5rem;
  }
  #htmlIcon{
    position: absolute;
    margin: 1rem;
    height: 2rem;
    width: 2rem;
  }
  #htmlName{
    color: white;
    font-family: var(--font-1);
    margin-left: 1.1rem;
    font-size: .6rem;
  }
  #progressoHtml{
    position: absolute;
    height: 1.4rem;
    width: 12rem;
    background-color: rgb(20, 20, 20);
    margin-left: 4rem;
    top: 1.3rem;
    border: .1rem solid rgb(52, 52, 52);
    border-radius: 1rem;
  }
  #barraProgressoHtml{
    position: absolute;
    height: 100%;
    width: 0;
    background-color: rgb(54, 103, 238);
    border-radius: 1rem;
    animation: html 2s forwards;
  }
  @keyframes html{
    to{
      width: 85%;
    }
  }
  #porcentagemHtml{
    position: absolute;
    font-size: 1rem;
    top: 0rem;
    color: white;
    font-family: var(--font-1);
    margin-left: 13rem;
  }
  #Skill2{
    position: absolute;
    height: 4rem;
    width: 100%;
    margin-top: 9.5rem;
  }
  #cssIcon{
    position: absolute;
    margin: 1rem;
    height: 2rem;
    width: 2rem;
  }
  #cssName{
    color: white;
    font-family: var(--font-1);
    margin-left: 1.4rem;
    font-size: .6rem;
  }
  #progressoCss{
    position: absolute;
    height: 1.4rem;
    width: 12rem;
    background-color: rgb(20, 20, 20);
    margin-left: 4rem;
    top: 1.3rem;
    border: .1rem solid rgb(52, 52, 52);
    border-radius: 1rem;
  }
  #barraProgressoCss{
    position: absolute;
    height: 100%;
    width: 0;
    background-color: rgb(54, 103, 238);
    border-radius: 1rem;
    animation: css 2s forwards;
  }
  @keyframes css{
    to{
      width: 90%;
    }
  }
  #porcentagemCss{
    position: absolute;
    font-size: 1rem;
    top: 0rem;
    color: white;
    font-family: var(--font-1);
    margin-left: 13rem;
  }
  #Skill3{
    position: absolute;
    height: 4rem;
    width: 100%;
    margin-top: 13.5rem;
  }
  #jsIcon{
    position: absolute;
    margin: 1rem;
    height: 2rem;
    width: 2rem;
  }
  #jsName{
    color: white;
    font-family: var(--font-1);
    margin-left: .5rem;
    font-size: .6rem;
  }
  #progressoJs{
    position: absolute;
    height: 1.4rem;
    width: 12rem;
    background-color: rgb(20, 20, 20);
    margin-left: 4rem;
    top: 1.3rem;
    border: .1rem solid rgb(52, 52, 52);
    border-radius: 1rem;
  }
  #barraProgressoJs{
    position: absolute;
    height: 100%;
    width: 0;
    background-color: rgb(54, 103, 238);
    border-radius: 1rem;
    animation: css 2s forwards;
  }
  @keyframes js{
    to{
      width: 90%;
    }
  }
  #porcentagemJs{
    position: absolute;
    font-size: 1rem;
    top: 0rem;
    color: white;
    font-family: var(--font-1);
    margin-left: 13rem;
  }
  
  /*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
  
  footer{
      width: 100%;
      height: 10rem;
      background-color: var(--gray);
      transition: 0.3s all linear;
  }
  }
