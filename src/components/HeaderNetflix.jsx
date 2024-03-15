import Form from "react-bootstrap/Form";

const HeaderNetflix = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4">TV Shows</h2>
          <div className="btn-group" role="group">
            <div className="dropdown ms-4 mt-1">
              <Form.Select
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f" }}
              >
                Genres
                <option>Genres</option>
                <option value="1">Comedy</option>
                <option value="2">Drama</option>
                <option value="3">Thriller</option>
              </Form.Select>
            </div>
          </div>
        </div>
        <div>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
        </div>
      </div>
    </>
  );
};

export default HeaderNetflix;
