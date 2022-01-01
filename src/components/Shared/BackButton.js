import { useHistory } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <button className="go-back-button" onClick={handleClick}>
      Go Back
    </button>
  );
}

export default BackButton;
