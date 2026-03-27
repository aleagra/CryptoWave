import { motion } from "framer-motion";
import {
  CoinList,
  Home,
  HomeRegister,
  Navbar,
  Contact,
  Footer,
} from "../componentes";
export function Homepage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <Navbar />
      <main>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}>
          <Home />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}>
          <CoinList />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}>
          <HomeRegister />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUpVariant}>
          <Contact />
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
