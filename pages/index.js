import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-md-3 mb-3">
            <Link href="/absen">
              <a>
                <div className="card bg-success text-white">
                  <div className="card-body text-center p-2">
                    <h6>Kabupaten Tangerang</h6>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Pamulang</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Kota Tangerang</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Kabupaten Bogor</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Kabupaten Tangerang</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Pamulang</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Kota Tangerang</h6>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card bg-success text-white">
              <div className="card-body text-center p-2">
                <h6>Kabupaten Bogor</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
