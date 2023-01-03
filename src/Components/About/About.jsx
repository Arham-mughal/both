import { useState } from "react";
import React from 'react';

const About = () => {

    let Saepe = <div className="tab-pane fade show active" id="tab1">

        <p className="fst-italic">Consequuntur inventore voluptates consequatur aut vel et. Eos doloribus expedita.
            Sapiente atque consequatur minima nihil quae aspernatur quo suscipit voluptatem.</p>

        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Repudiandae rerum velit modi et officia quasi facilis</p>
        </div>
        <p>Laborum omnis voluptates voluptas qui sit aliquam blanditiis. Sapiente minima commodi dolorum non
            eveniet magni quaerat nemo et.</p>

        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Incidunt non veritatis illum ea ut nisi</p>
        </div>
        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure
            molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis.</p>

        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Omnis ab quia nemo dignissimos rem eum quos..</p>
        </div>
        <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias
            quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error
            voluptatem eum.</p>

    </div>;

    let Volupatetes = <div>
        <p>Content of Voupates can be changed here</p>
        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Incidunt non veritatis illum ea ut nisi</p>
        </div>
        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure
            molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis.</p>
        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Omnis ab quia nemo dignissimos rem eum quos..</p>
        </div>
        <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias
            quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error
            voluptatem eum.</p>
    </div>;

    let Corrupti = <div>
        <p>Content of Corrupti can be changed here</p>
        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2"></i>
            <p className="ab-heading">Incidunt non veritatis illum ea ut nisi</p>
        </div>
        <p>Non quod totam minus repellendus autem sint velit. Rerum debitis facere soluta tenetur. Iure
            molestiae assumenda sunt qui inventore eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis.</p>

        <div className="d-flex align-items-center mt-4">
            <i className="bi bi-check2" ></i>
            <p className="ab-heading">Omnis ab quia nemo dignissimos rem eum quos..</p>
        </div>
        <p>Eius alias aut cupiditate. Dolor voluptates animi ut blanditiis quos nam. Magnam officia aut ut alias
            quo explicabo ullam esse. Sunt magnam et dolorem eaque magnam odit enim quaerat. Vero error error
            voluptatem eum.</p>

    </div>;

    const ThreeDiv = ["Saepe fuga", "Voluptates", "Corrupti"];
    const [div, activeDiv] = useState("");

    return (
        <section id="about" className="about">
            <div className="container" >

                <div className="section-header">
                    <h2>About Us</h2>
                    <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas
                        asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
                </div>




                <div className="row g-4 g-lg-5">

                    <div className="col-lg-5">
                        <div className="about-img">
                            <img src="Images/about.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <h3 className="pt-0 pt-lg-5">Neque officiis dolore maiores et exercitationem quae est seda lidera pat claero
                        </h3>

                        <ul className="nav nav-pills mb-3">
                            {
                                ThreeDiv.map(e => (
                                    <button type="button"
                                        key={e}
                                        className="About-btn"
                                        onClick={() => activeDiv(e)}
                                    >
                                        {e}
                                    </button>
                                ))
                            }
                        </ul>

                        {

                            (div === "Saepe") ? Saepe :
                                (div === "Voluptates") ? Volupatetes :
                                    (div === "Corrupti") ? Corrupti :
                                        Saepe
                        }
                    </div>

                </div>



            </div>
        </section>

    );
}
export default About;