import { styled } from "@material-ui/core/styles";

export const Container = styled("div")({
  background: "#fff",
  width: "100%",
  height: "100vh",
  display: "flex",
});

export const PageNameContainer = styled("div")({
  background: "#6CC299",
  height: "100vh",
  display: "flex",
  width: "20%",
});

export const FormContainer = styled("div")({
  background: "#fff",
  height: "100vh",
  display: "flex",
  padding: "0 50px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});

export const Form = styled("form")({
  background: "#fff",
  width: "400px",
  maxWidth: "500px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

export const TextFormContainer = styled("div")({
  color: "black",
  width: "400px",
  maxWidth: "500px",
  textTransform: "capitalize",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "17px",
  marginTop: "50px",
});

export const TextFormH1 = styled("h1")({
  color: "black",
  width: "400px",
  maxWidth: "400px",
  textTransform: "capitalize",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "56px",
  lineHeight: "46px",
});
