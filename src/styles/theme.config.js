import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
  // color
  bgColor: '#ffffff',
  mainColor: '#d80000',
  subColor: '#ff0000',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  yellowColor: '#ffd600',
  grayColor: '#f3f3f3',
  borderTable: '#2d2d2d'
}

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0 !important;
    background: ${({ theme }) => theme.bgColor};
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }
  
  input, textarea, button {font-family: inherit}

  ol,ul{
    list-style:none;
    padding: 0;
    margin: 0;

  }
  caption,th{
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight:400;

  }
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }

  a{
    text-decoration:none;
    color: ${({ theme }) => theme.whiteColor};
  }
  a:hover {
    color: ${({ theme }) => theme.mainColor};
  }
  a:active,a:focus{
    outline:none;
  } 

  a:hover svg path  {
    stroke: ${({ theme }) => theme.mainColor};
  }


  input:focus-visible, 
  input:active,
  input:focus,
  textarea:focus-visible, 
  textarea:active,
  textarea:focus,
  select:focus-visible, 
  select:active,
  select:focus {
    outline: 1px solid ${({ theme }) => theme.mainColor};
    border: 1px solid ${({ theme }) => theme.mainColor} !important; 
  }

  table {
    border-collapse: inherit;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 1rem;
    margin-top: 3.2rem;

    thead {
      tr th {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.blackColor};
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.borderTable};
      }
    }

    tbody {
      tr td {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 2rem;
        padding-bottom: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.borderTable};
      }

      tr td:last-child {
        cursor: pointer;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }

  .Toastify__toast .Toastify__toast-body {
    font-size: 1.6rem;
  }

   /* Variables */
  :root{
      font-size: 10px;
  }
`
