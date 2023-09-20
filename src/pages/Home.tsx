import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <React.Fragment>
      <div className="w-full h-screen bg-white flex">
        <div className="flex-[30%] w-full h-full p-10">
          <h1 className="text-3xl text-neutral-900 text-left font-semibold flex justify-start items-center gap-2">
            <FontAwesomeIcon
              icon={faFilter}
              className="text-base text-white p-2 bg-neutral-900 rounded-full"
            />
            Filter
          </h1>
          <hr className="border border-neutral-700 rounded-full mt-5" />
        </div>
        <div className="flex-[70%] w-full h-full overflow-y-scroll scrollbar-hide bg-blue-300 p-10 gap-10 grid grid-cols-3 grid-flow-row">
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">
                American Heritage Chocolate
                <div className="badge badge-primary">NEW</div>
              </h1>
              <p>
                Kue dengan citarasa ala amerika, dibalut dengan coklat yang
                lumer dan kaya, dan dibuat dengan bahan - bahan pilihan.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Cake</div>
                <div className="badge badge-outline">Chocolate</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img src="/charles-chen-w2ZFjDnUL3w-unsplash.jpg" alt="product" />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">
                White Bread
                <div className="badge badge-primary">NEW</div>
              </h1>
              <p>
                Roti tawar yang gak bisa di tawar harganya tapi bisa ditaburi
                dengan meses ataupun selai agar rasanya semakin gurih dan manis,
                cocok untuk sarapan pagi.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Bread</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/chocolate-cake-with-chocolate-sprinkles.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">
                Chocolate Cake
                <div className="badge badge-accent">FEATURED</div>
              </h1>
              <p>
                Kue coklat dengan rasa manis dan gurih, dibalut pula dengan saus
                coklat yang nikmat, memanjakan lidah kamu.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Cake</div>
                <div className="badge badge-outline">Chocolate</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img src="/conor-brown-sqkXyyj4WdE-unsplash.jpg" alt="product" />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">
                Croissants
                <div className="badge badge-accent">FEATURED</div>
              </h1>
              <p>
                Kue dengan rasa yang renyah dan gurih, pilihan yang menarik
                dipadukan dengan kopi ataupun teh, rasa yang dapat memanjakan
                lidah.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Bread</div>
                <div className="badge badge-secondary">Favourite</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/cute-mini-strawberry-shortcake-pink.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">Strawberry Shortcake</h1>
              <p>
                Kue manis dengan baluran saus stroberi yang manis, membuat
                rasanya menggugah selera, kue yang layak dijadikan buah tangan.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Dessert</div>
                <div className="badge badge-outline">Sweet</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/ikhsan-baihaqi-RwAXb8Hv_sU-unsplash.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">Mie Goreng Pedas</h1>
              <p>
                Makanan yang bisa kamu jadikan cemilan ataupun penghilang rasa
                lapar, cocok untuk kamu yang malas memasak dan ingin yang
                instan.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Noodles</div>
                <div className="badge badge-outline">Spicy</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">Borgir</h1>
              <p>Borgir.</p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Borgir</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/ball-park-brand-RKQ4-Q5FF-o-unsplash.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">Hot Dog</h1>
              <p>
                Roti Sosis dengan paduan saus sambal dan mayonais, citarasa
                gurih yang dimiliki dapat menggugah selera kamu.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Sausage</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img
                src="/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg"
                alt="product"
              />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">Blueberry French Toast</h1>
              <p>
                Roti ala prancis, dibalut dengan blueberry dan pisang yang manis
                dan gurih, memberikan rasa baru yang bisa kamu cicipi.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Breakfast</div>
                <div className="badge badge-outline">Bread</div>
              </div>
            </div>
          </div>
          <div className="card w-96 h-96 bg-white shadow-xl">
            <figure>
              <img src="/pexels-glady-francis-1586942.jpg" alt="product" />
            </figure>
            <div className="card-body text-neutral-900">
              <h1 className="card-title">French Fries</h1>
              <p>
                Kentang gurih yang digoreng dengan api sedang, kematangan yang
                pas dan kerenyahan yang menggugah selera kamu.
              </p>
              <div className="card-actions justify-start">
                <div className="badge badge-outline">Breakfast</div>
                <div className="badge badge-outline">Fries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
