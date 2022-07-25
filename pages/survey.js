import React from "react";

export default function Survey() {
  return (
    <>
      <p className="text-success" style={{ fontWeight: "bold" }}>
        Pertanyaan 6/20
      </p>

      <div className="answer mb-4">
        Siapa Gubernur Jakarta Pada Tahun 2019 ?
      </div>

      <div class="form-check mb-4">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Anis Baswedan
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="02"
        />
        <label class="form-check-label" for="02">
          Sandiaga Uno
        </label>
      </div>

      <div class="d-grid gap-2 mt-4">
        <button class="btn btn-success" type="button">
          Selanjutnya
        </button>
      </div>
    </>
  );
}
