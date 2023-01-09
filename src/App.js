import { Container } from "@mui/material";
import ImageList from "./components/imageList/ImageList";
import Nav from "./components/Nav";
import Upload from "./components/upload/Upload";

function App() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: "3rem" }}>
      <Nav />
      <Upload />
      <ImageList />
    </Container>
  );
}

export default App;
