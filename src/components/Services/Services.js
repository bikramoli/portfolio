import React, { memo } from "react";
import { Container } from "react-bootstrap";
import {
  FaClipboardCheck,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaPencilRuler,
  FaPhotoVideo,
} from "react-icons/fa";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <Container className="py-5 service-inner">
        <h1 className="text-uppercase text-center py-4 pt-2">What I do?</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faPencilRuler} size='2x' className='icon__color'/> */}
              <FaPencilRuler size={70} />
              <h3 className="pt-2 pb-2">Web Design</h3>
              <p className="mb-4">
                I can help with the first steps of creating your website with a
                wireframe or mock-up design. I can make a low-fidelity or
                high-fidelity mock-up that is professional and responsive
              </p>
              <hr className="break" />
            </div>

            {/* - */}
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faCode}C size='2x' className='icon__color mt-2'/> */}
              <FaLaptopCode size={70} />
              <h3 className="pt-2 pb-2">Front End Development</h3>
              <p className="mb-4">
                I will bring your website to life with the latest technologies!
                I can make a simple landing page, static or dynamic site, blog,
                or e-commerce site. I focus on mobile responsiveness, security,
                SEO, and accessibility.
              </p>
              <hr className="break" />
            </div>
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faMobileAlt} size='2x' className='icon__color'/> */}
              <FaMobile size={70} />
              <h3 className="pt-2 pb-2">Mobile Web Specialist</h3>
              <p className="mb-4">
                Responsive web site is essentail! Half of all web traffic is
                from a mobile device! Responsive site can also affect your
                Google ranking! I can make sure your site is ready for the
                mobile world!
              </p>
            </div>
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faPencilRuler} size='2x' className='icon__color'/> */}
              <FaCode size={70} />
              <h3 className="pt-2 pb-2">Clean Code</h3>
              <p className="mb-4">
                Clean code is code which is easy to read and understand as well
                as easy for any developer to maintain and modify. It means that
                assigned names are meaningful but not too long. No parts of code
                should be repeated, and almost everything should be consistent
              </p>
              <hr className="break" />
            </div>

            {/* - */}
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faCode}C size='2x' className='icon__color mt-2'/> */}
              <FaPhotoVideo size={70} />
              <h3 className="pt-2 pb-2">Photographic</h3>
              <p className="mb-4">
                I will bring your website to life with the latest technologies!
                I can make a simple landing page, static or dynamic site, blog,
                or e-commerce site. I focus on mobile responsiveness, security,
                SEO, and accessibility.
              </p>
              <hr className="break" />
            </div>
            <div className="col-md-4 col-sm-6 des">
              {/* <FontAwesomeIcon icon={faMobileAlt} size='2x' className='icon__color'/> */}
              <FaClipboardCheck size={70} />
              <h3 className="pt-2 pb-2">Testing/Debugging</h3>
              <p className="mb-4">
                Testing is an important part of any project to keep the bugs
                away. I perform Functional testing to test functionality on your
                site, Unit testing for small bits of code. I use Programs like
                Mocha and Jasmine to speed up and simplify your testing process.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default memo(Services);
