import styled from "styled-components";

export const WrapperLogin = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction: column;
width: 800px;
height:800px;
gap:16px;

h1{
  margin-Bottom:16px;
}
`
export const Logo = styled.img``
export const InputLogin = styled.input`
width: 338px;
height:57px;
padding:16px;
border-radius:8px;
border: 1px solid #3D76FF;
background-color: transparent;

&:focus {
  border-color: red;
    }
`
export const InputPassword = styled.input`
width: 338px;
height:57px;
border-radius:8px;
padding:16px;
border: 1px solid #3D76FF;
background-color: transparent;
`

export const ButtonLogin = styled.div`
width: 338px;
height:57px;
border-radius:8px;
border:0;
padding:16px;
border: 1px solid #3D76FF;
background-color:#2B2AF4;
text-align:center;
font-size:16px;
font-weight:bold;
`