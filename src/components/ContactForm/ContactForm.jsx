import React, { useState } from "react";
import SectionHeading from "./../SectionHeading/SectionHeading";
import { HoverBorderGradient } from "./../ui/hover-border-gradient";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import { LocationTick, CallCalling, DirectInbox } from "iconsax-react";
import { Link } from "react-router-dom";
import "./ContactFormStyles.css";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8af1d6a8-04b8-411d-b570-0c8aac078875");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your message has been submitted successfully ",
        showConfirmButton: false,
        timer: 1500,
      });

      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="container mx-auto bg-white rounded-lg p-5  mt-[-250px] pb-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="contactUsDetails  bg-gradient-to-r from-sky-50 to-sky-200 rounded-lg p-4">
            <SectionHeading heading="Contact Information" />
            <div className="contactDetails">
              
              <div className=" mb-4 mt-2 flex content-center items-center">
                <LocationTick
                  size="30"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <strong>Pune Office:</strong> F-108, Ashoka Mall, Opp. Sun &
                  Sand Hotel, Bund Garden Road, Pune – 411001.
                </h3>
              </div>

              <div className=" mb-4 mt-2 flex content-center items-center">
                <LocationTick
                  size="30"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <strong>Bangalore Office: </strong> 405 B wing, 4th Floor,
                  Mittal Tower, Trinity, M.G.Road,Banglore- 560001.
                </h3>
              </div>

              <div className=" mb-4 mt-2 flex content-center items-center">
                <DirectInbox
                  size="22"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <Link to="mailto:mahima07@rediffmail.com">
                    mahima07@rediffmail.com
                  </Link>
                  <br />
                  <Link to="mailto:mahimaconsultancies@gmail.com">
                    mahimaconsultancies@gmail.com
                  </Link>
                </h3>
              </div>

              <div className=" mb-4 mt-2 flex content-center items-center">
                <CallCalling
                  size="22"
                  color="#3498db"
                  variant="TwoTone"
                  className="me-2"
                />

                <h3 className="text-l font-medium">
                  <Link to="tel:9890008077" target="_blank">
                    +91 98900 080 77
                  </Link>
                </h3>
              </div>

            </div>
            
          </div>

          <div className="w-100 content-center">
            <form onSubmit={onSubmit}>
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email ID
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Contact Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        autoComplete="contact"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                        required
                      />
                    </div>
                  </div>

                  <div className=" sm:col-span-full text-center content-center">
                    <HoverBorderGradient
                      containerClassName="rounded-full mx-auto"
                      as="button"
                      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 mx-auto"
                      type="submit"
                    >
                      Submit
                    </HoverBorderGradient>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
