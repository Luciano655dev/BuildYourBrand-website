import { Container } from "./footerCSS"

function Footer() {
  return (
    <Container>
      <a href="https://docs.google.com/presentation/d/1jXadoau8Mn6YpEEq61ryah-70TCh0lfUQ3mVX-RJLi4/edit?slide=id.g346c69bb50c_0_33#slide=id.g346c69bb50c_0_33">
        See More About the Game
      </a>
      <p>&copy; {new Date().getFullYear()} Luciano Menezes, Daykeeper</p>
    </Container>
  )
}

export default Footer
