import { motion } from "framer-motion";
import { Container } from "./style";

const LandingPage = () => {
  return (
    <Container>
      <motion.div
        className="animated-welcome"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ type: "just" }}
      >
        <div>Bem vindo à James tip!</div>
      </motion.div>
    </Container>
  );
};

export default LandingPage;
