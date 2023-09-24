import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    alert("Checking if it's working");
  }

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
          <form className="join mt-5 w-full">
            <input className="join-item input w-full bg-white text-neutral-900 border border-neutral-900" />
            <button
              className="btn glass join-item text-neutral-900 ease-out duration-200 border border-neutral-900 hover:text-white"
              onClick={(e) => handleSubmit(e)}
            >
              <FontAwesomeIcon icon={faSearch} className="text-base p-2" />
            </button>
          </form>
          <div className="collapse collapse-arrow mt-5 w-full">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-3xl text-neutral-900 text-left font-semibold underline">
              Category
            </div>
            <div className="collapse-content">
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Borgir</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Bread</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Breakfast</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Cake</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Chocolate</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Dessert</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Fries</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Noodles</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Sausage</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Spicy</span>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success"
                  />
                  <span className="label-text text-neutral-900">Sweet</span>
                </label>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-3xl text-neutral-900 text-left font-semibold underline">
              Tag
            </div>
            <div className="collapse-content">
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                  />
                  <div className="badge badge-secondary">FAVOURITE</div>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input type="checkbox" className="checkbox checkbox-accent" />
                  <div className="badge badge-accent">FEATURED</div>
                </label>
              </div>
              <div className="form-control text-neutral-900 w-full">
                <label className="label cursor-pointer justify-start gap-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <div className="badge badge-primary">NEW</div>
                </label>
              </div>
            </div>
          </div>
          <div className="avatar online absolute bottom-0 left-0 mb-10 ml-10">
            <div className="rounded-full w-14 ring ring-neutral">
              <img src="/profile.JPG" alt="profile" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="flex-[70%] w-full h-full overflow-y-scroll scrollbar-hide bg-blue-300 p-10 gap-10 grid grid-cols-3 grid-flow-row">
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-primary">
              NEW!!!
            </span>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <figure>
                <img
                  src="/american-heritage-chocolate-vdx5hPQhXFk-unsplash.jpg"
                  alt="product"
                />
              </figure>
              <div className="card-body text-neutral-900">
                <h1 className="card-title">American Heritage Chocolate</h1>
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
          </div>
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-primary">
              NEW!!!
            </span>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <figure>
                <img
                  src="/charles-chen-w2ZFjDnUL3w-unsplash.jpg"
                  alt="product"
                />
              </figure>
              <div className="card-body text-neutral-900">
                <h1 className="card-title">White Bread</h1>
                <p>
                  Roti tawar yang gak bisa di tawar harganya tapi bisa ditaburi
                  dengan meses ataupun selai agar rasanya semakin gurih dan
                  manis, cocok untuk sarapan pagi.
                </p>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">Bread</div>
                </div>
              </div>
            </div>
          </div>
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-accent">
              FEATURED!!!
            </span>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <figure>
                <img
                  src="/chocolate-cake-with-chocolate-sprinkles.jpg"
                  alt="product"
                />
              </figure>
              <div className="card-body text-neutral-900">
                <h1 className="card-title">Chocolate Cake</h1>
                <p>
                  Kue coklat dengan rasa manis dan gurih, dibalut pula dengan
                  saus coklat yang nikmat, memanjakan lidah kamu.
                </p>
                <div className="card-actions justify-start">
                  <div className="badge badge-outline">Cake</div>
                  <div className="badge badge-outline">Chocolate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="indicator">
            <span className="indicator-item indicator-center badge badge-accent">
              FEATURED!!!
            </span>
            <div className="card w-96 h-96 bg-white shadow-xl">
              <figure>
                <img
                  src="/conor-brown-sqkXyyj4WdE-unsplash.jpg"
                  alt="product"
                />
              </figure>
              <div className="card-body text-neutral-900">
                <h1 className="card-title">Croissants</h1>
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
