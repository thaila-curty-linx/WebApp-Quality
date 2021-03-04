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

export const InfoContainer = styled("div")({
  background: "#fff",
  height: "100vh",
  display: "flex",
  padding: "0 50px",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
});

export const Info = styled("div")({
  color: "#000",
  width: "400px",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "row",
  flex: "1",
  lineHeight: "22px",
  margin: "10px 4px",
});

export const TextH1 = styled("h1")({
  color: "black",
  width: "400px",
  maxWidth: "400px",
  textTransform: "capitalize",
  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "56px",
  lineHeight: "46px",
  marginTop: "50px",
});
