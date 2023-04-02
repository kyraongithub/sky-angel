/* eslint-disable react-hooks/rules-of-hooks */
import { useGlobalState } from "@/context";
import Homepage from "@/views/home";

const homepage = () => {
  const { score, setScore } = useGlobalState();
  const props = { score, setScore };

  return <Homepage {...props} />;
};

export default homepage;
