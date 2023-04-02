/* eslint-disable react-hooks/rules-of-hooks */
import { useGlobalState } from "@/context";
import Homepage from "@/views/home";

const homepage = () => {
  return <Homepage {...useGlobalState()} />;
};

export default homepage;
