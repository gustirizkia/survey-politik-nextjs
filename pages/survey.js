export default function Survey() {
  return (
    <>
      <p className="text-success" style={{ fontWeight: "bold" }}>
        Pertanyaan 6/20
      </p>

      <div className="answer mb-4">
        Siapa Gubernur Jakarta Pada Tahun 2019 ?
      </div>

      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Anis Baswedan
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="02"
        />
        <label className="form-check-label" htmlFor="02">
          Sandiaga Uno
        </label>
      </div>

      <div className="d-grid gap-2 mt-4">
        <button className="btn btn-success" type="button">
          Selanjutnya
        </button>
      </div>
    </>
  );
}
