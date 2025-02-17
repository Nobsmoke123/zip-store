import {
  useLocation,
  useParams,
  useNavigate,
  useMatch,
} from "react-router-dom";

export const withRouter = (Component) => (props) => {
  const location = useLocation();
  const history = useNavigate();
  const params = useParams();
  const match = useMatch();
  
  return <Component {...props} router={{ location, params, history, match }} />;
};
