import Image from "next/image";
import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import Link from "next/link";

export default function absen() {
  const [dataImage, setDataImage] = useState("");
  const [isOpenCam, setIsOpenCam] = useState(true);
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataImage(dataUri);
    setIsOpenCam(false);
  }
  return (
    <>
      <h5>Absen Relawan</h5>

      {isOpenCam ? (
        <>
          <Camera
            onTakePhoto={(dataUri) => {
              handleTakePhoto(dataUri);
            }}
          />
        </>
      ) : (
        <>
          <Image
            unoptimized
            src={dataImage}
            alt="Landscape picture"
            width={"100%"}
            height={"100%"}
          />
          <div>
            <div className="row">
              <div className="col-4">
                <div class="d-grid gap-2 mt-4">
                  <button
                    class="btn btn-outline-success"
                    type="button"
                    onClick={() => setIsOpenCam(true)}
                  >
                    Kamera
                  </button>
                </div>
              </div>
              <div className="col-8">
                <Link href="/survey">
                  <a>
                    <div class="d-grid gap-2 mt-4">
                      <button class="btn btn-success" type="button">
                        Selanjutnya
                      </button>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}