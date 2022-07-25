import Head from "next/head";
import "../styles/globals.css";
import "../styles/Survey.css";
import "../public/bootstrap-5/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
