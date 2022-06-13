import { motion } from "framer-motion";
import { Container } from "./style";
import arrowFace from "../../assets/img/arrow-face.svg";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <Container>
      <motion.div
        className="animated-face"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "keyframes", duration: 0.9 }}
      >
        <img src={arrowFace} alt="" />
      </motion.div>
      <motion.div
        className="animated-welcome"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 1.5 }}
      >
        <div className="text">
          Bem vindo a área de cadastro <span className="james">James tip</span>!
        </div>
      </motion.div>
      <motion.div
        className="animated-btn"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", delay: 1, duration: 1.5 }}
      >
        <div className="btn">
          <button onClick={() => history.push("/register")}>Começar</button>
        </div>
      </motion.div>
    </Container>
  );
};

export default LandingPage;
