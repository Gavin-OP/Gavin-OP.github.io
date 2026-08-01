import { Provider } from "react-redux";
import { store } from "../store";

const AppProviders = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AppProviders;
