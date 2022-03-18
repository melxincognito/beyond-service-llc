import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Lightbox = ({
  clickedImg,
  setClickedImg,
  handleRotationRight,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };

  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />

        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        <div onClick={handleRotationLeft} className="overlay-arrows_left">
          <div>
            <ArrowBackIosNewIcon />
          </div>
        </div>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
          <div>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
