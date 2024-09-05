const TheProject = ({ data, switchView }) => {
  const handleClick = () => {
    switchView("projectDetails", data.id);
  };
  return (
    <div
      className="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2 justify-content-center"
      onClick={handleClick}
    >
      <a
        className="portfolio-item ajax-load-page isotope-item gsap-reveal-img"
        data-id="1"
        onClick={handleClick}
      >
        <div className="overlay">
          <span className="wrap-icon icon-link2"></span>
          <div className="portfolio-item-content">
            <h3>{data.projectName}</h3>
          </div>
        </div>
        <img
          src={data.mainImage}
          className="lazyload  img-fluid"
          alt="Images"
          onClick={handleClick}
        />
      </a>
    </div>
  );
};

export default TheProject;
