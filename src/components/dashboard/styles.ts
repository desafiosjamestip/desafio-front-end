import styled from "styled-components";

const padding = '2em'

export const Section = styled.section`
  color: Black;

  /* Pass variables as inputs */
  padding: ${padding};

  /* Adjust the background from the properties */
  background: White;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  width:46%;  
  margin: 1em;
  `

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  
 
`;
export const ParentComponent = styled.div`
  // border: 1px solid red;
  // height: 900px;
  // width: 60%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  #childrens {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
export const Form = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  

  input {
    width: 260px;
    height: 30px;
    margin-top: 10px;
    text-align: left;
  }
`;
export const Button = styled.button`
 
  text-decoration:none;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: palevioletred;
  color: white;
 
  
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Text = styled.p`
  font-size: 1em;
  text-align: center;
  color: palevioletred;
`;


export const FormGroup = styled.div`
	color: palevioletred;
  display: block;
	width: 300px;
	margin: 50px auto;
`;