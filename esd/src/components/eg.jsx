// Merit scholarship page
import React, { useState } from "react";
import { Card, Col, Container, Row, Button, Modal } from "react-bootstrap";
import Navbar from "./Navbar";
// import homeImage from "../image/scholarship.jpg";
import ApplicationForm from "./ApplicationForm";
import { Link } from "react-router-dom";

const dictionary = {
  Scholarship1: {
    name: "Scholarship1",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a elit scelerisque consequat id id elit. Curabitur ac dictum arcu. Nulla facilisi. Nullam eget ante a odio vehicula tincidunt. Morbi ac nisl tincidunt, pretium turpis ac, imperdiet odio. Vestibulum tincidunt leo vitae libero semper, nec pretium mauris vulputate. Donec lacinia efficitur felis, id blandit ante consectetur vel. Cras eget tortor augue. Phasellus id pretium ipsum, id varius arcu. Donec feugiat, nunc a pulvinar ullamcorper, enim nunc suscipit mi, ac euismod nunc purus a lorem. Sed auctor, libero vel malesuada euismod, massa sapien feugiat lectus, quis sollicitudin dolor lacus at ipsum. Aliquam dapibus fermentum lorem, ut viverra turpis tempor sit amet. Sed eu bibendum est. Nam ut odio quis metus ullamcorper viverra. Maecenas vitae efficitur dolor.",
    DocumentsRequired: "Adhar Card, Income Certificate, LOR, Marksheets",
    Note: "Marksheet is compulsory",
  },
  Scholarship2: {
    name: "Scholarship2",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a elit scelerisque consequat id id elit. Curabitur ac dictum arcu. Nulla facilisi. Nullam eget ante a odio vehicula tincidunt. Morbi ac nisl tincidunt, pretium turpis ac, imperdiet odio. Vestibulum tincidunt leo vitae libero semper, nec pretium mauris vulputate. Donec lacinia efficitur felis, id blandit ante consectetur vel. Cras eget tortor augue. Phasellus id pretium ipsum, id varius arcu. Donec feugiat, nunc a pulvinar ullamcorper, enim nunc suscipit mi, ac euismod nunc purus a lorem. Sed auctor, libero vel malesuada euismod, massa sapien feugiat lectus, quis sollicitudin dolor lacus at ipsum. Aliquam dapibus fermentum lorem, ut viverra turpis tempor sit amet. Sed eu bibendum est. Nam ut odio quis metus ullamcorper viverra. Maecenas vitae efficitur dolor.",
    DocumentsRequired: "Adhar Card, Income Certificate, LOR, Marksheets",
    Note: "Marksheet is compulsory",
  },
  Scholarship3: {
    name: "Scholarship3",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a elit scelerisque consequat id id elit. Curabitur ac dictum arcu. Nulla facilisi. Nullam eget ante a odio vehicula tincidunt. Morbi ac nisl tincidunt, pretium turpis ac, imperdiet odio. Vestibulum tincidunt leo vitae libero semper, nec pretium mauris vulputate. Donec lacinia efficitur felis, id blandit ante consectetur vel. Cras eget tortor augue. Phasellus id pretium ipsum, id varius arcu. Donec feugiat, nunc a pulvinar ullamcorper, enim nunc suscipit mi, ac euismod nunc purus a lorem. Sed auctor, libero vel malesuada euismod, massa sapien feugiat lectus, quis sollicitudin dolor lacus at ipsum. Aliquam dapibus fermentum lorem, ut viverra turpis tempor sit amet. Sed eu bibendum est. Nam ut odio quis metus ullamcorper viverra. Maecenas vitae efficitur dolor.",
    DocumentsRequired: "Adhar Card, Income Certificate, LOR, Marksheets",
    Note: "Marksheet is compulsory",
  },
  Scholarship4: {
    name: "Scholarship4",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a elit scelerisque consequat id id elit. Curabitur ac dictum arcu. Nulla facilisi. Nullam eget ante a odio vehicula tincidunt. Morbi ac nisl tincidunt, pretium turpis ac, imperdiet odio. Vestibulum tincidunt leo vitae libero semper, nec pretium mauris vulputate. Donec lacinia efficitur felis, id blandit ante consectetur vel. Cras eget tortor augue. Phasellus id pretium ipsum, id varius arcu. Donec feugiat, nunc a pulvinar ullamcorper, enim nunc suscipit mi, ac euismod nunc purus a lorem. Sed auctor, libero vel malesuada euismod, massa sapien feugiat lectus, quis sollicitudin dolor lacus at ipsum. Aliquam dapibus fermentum lorem, ut viverra turpis tempor sit amet. Sed eu bibendum est. Nam ut odio quis metus ullamcorper viverra. Maecenas vitae efficitur dolor.",
    DocumentsRequired: "Adhar Card, Income Certificate, LOR, Marksheets",
    Note: "Marksheet is compulsory",
  },
  Scholarship5: {
    name: "Scholarship5",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo a elit scelerisque consequat id id elit. Curabitur ac dictum arcu. Nulla facilisi. Nullam eget ante a odio vehicula tincidunt. Morbi ac nisl tincidunt, pretium turpis ac, imperdiet odio. Vestibulum tincidunt leo vitae libero semper, nec pretium mauris vulputate. Donec lacinia efficitur felis, id blandit ante consectetur vel. Cras eget tortor augue. Phasellus id pretium ipsum, id varius arcu. Donec feugiat, nunc a pulvinar ullamcorper, enim nunc suscipit mi, ac euismod nunc purus a lorem. Sed auctor, libero vel malesuada euismod, massa sapien feugiat lectus, quis sollicitudin dolor lacus at ipsum. Aliquam dapibus fermentum lorem, ut viverra turpis tempor sit amet. Sed eu bibendum est. Nam ut odio quis metus ullamcorper viverra. Maecenas vitae efficitur dolor.",
    DocumentsRequired: "",
  },
  Scholarship6: {
    name: "Scholarship6",
    deadline: "30 April, 2023",
    lastDateUpdate: "10 May, 2023",
    amount: 15000,
    eligibility: "",
    DocumentsRequired: "",
  },
};
// function DictionaryList({ onItemClick }) {
//   const [showModal, setShowModal] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const handleButtonClick = (index) => {
//     setSelected(index);
//     setShowModal(true);
//   };
//   const [data, setData] = useState(dictionary);
//   return (
//     <div>
//       <h3>Dictionary Items:</h3>
//       <Container>
//         <Row>
//           {Object.keys(dictionary).map(([index, item]) => (
//             <>
//               <Col sm={12} md={4} style={{ padding: "20px" }}>
//                 <Card style={{ padding: "20px" }}>
//                   <h3>{item.name}</h3>
//                   <button
//                     className="btn btn-primary"
//                     key={item.name}
//                     onClick={() => handleButtonClick(index)}
//                   >
//                     {/* onClick={() => onItemClick(key)} */}
//                     Apply Now
//                   </button>
//                 </Card>
//               </Col>
//             </>
//           ))}
//         </Row>
//       </Container>

//       {/* <button key="Merit" onClick={() => onItemClick("Scholarship1")}>Learn More</button>
//             <button key="Need" onClick={() => onItemClick("Scholarship2")}>Learn More</button>
//             <button key="Resarch" onClick={() => onItemClick("Scholarship3")}>Learn More</button> */}

//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{data[selected]?.name}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Age: {data[selected]?.age}</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowModal(false)}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

function Eg() {
  //   const [selectedItem, setSelectedItem] = useState(null);

  //   function onItemClick(key) {
  //     setSelectedItem(dictionary[key]);
  //   }

  //   return (
  //     <div>
  //       {selectedItem ? (
  //         <DictionaryItem item={selectedItem} />
  //       ) : (
  //         <DictionaryList onItemClick={onItemClick} />
  //       )}
  //     </div>
  //   );

  // return(
  //  <DictionaryList/>
  // );
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(
    // Scholarship1: {
    //   name: "Scholarship1",
    //   age: 20,
    //   city: "New York",
    // },
    // Scholarship2: {
    //   name: "Scholarship2",
    //   age: 25,
    //   city: "San Francisco",
    // },
    // Scholarship3: {
    //   name: "Scholarship3",
    //   age: 30,
    //   city: "Los Angeles",
    // },
    // Scholarship4: {
    //   name: "Scholarship1",
    //   age: 20,
    //   city: "New York",
    // },
    // Scholarship5: {
    //   name: "Scholarship2",
    //   age: 25,
    //   city: "San Francisco",
    // },
    // Scholarship6: {
    //   name: "Scholarship6",
    //   age: 30,
    //   city: "Los Angeles",
    // },
    // Scholarship7: {
    //   name: "Scholarship7",
    //   age: 20,
    //   city: "New York",
    // },
    // Scholarship8: {
    //   name: "Scholarship8",
    //   age: 25,
    //   city: "San Francisco",
    // },
    // Scholarship9: {
    //   name: "Scholarship9",
    //   age: 30,
    //   city: "Los Angeles",
    // },

    dictionary
  );
  const [selected, setSelected] = useState(null);

  const handleButtonClick = (index) => {
    setSelected(index);
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="grid-cols-2">
          <div className="grid-item-1">
            <h1 className="main-heading">
              <span>Merit </span>Based Scholarships
              <br />
            </h1>
            <p className="info-text">
              Merit-based scholarships are awarded based on the student's
              academic achievements, talents, and accomplishments.
            </p>
          </div>
          <div className="grid-item-2">
            <div className="team_img_wrapper">
              {/* <img src="./img/team.svg" alt="team-img" /> */}
              {/* <img src={homeImage} alt=""  height={"5px"} width={"5px"}/> */}
              {/* <img src="./img/schedule.png" alt="" /> */}
            </div>
          </div>
        </div>
      </div>

      <section id="services">
        <div>
          <Container>
            <Row>
              {Object.entries(data).map(([index, item]) => (
                <Col sm={12} md={4} style={{ padding: "20px" }}>
                  <Card style={{ padding: "20px" }}>
                    <h3>{item.name}</h3>
                    <br />
                    <p>Deadline: {item.deadline}</p>
                    {/* <p>Last Date to Update: {item.lastDateUpdate}</p> */}
                    <p>Amount: {item.amount}</p>
                    <Button
                      key={index}
                      onClick={() => handleButtonClick(index)}
                    >
                      Apply Now
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{data[selected]?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={3} className="modal-label">
                Deadline:
              </Col>
              <Col sm={9}>{data[selected]?.deadline}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Last Date to Update Details:
              </Col>
              <Col sm={9}>{data[selected]?.lastDateUpdate}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Amount:
              </Col>
              <Col sm={9}>{data[selected]?.amount}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Eligibility:
              </Col>
              <Col sm={9}>{data[selected]?.eligibility}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Documents Required:
              </Col>
              <Col sm={9}>{data[selected]?.DocumentsRequired}</Col>
            </Row>
            <br />
            <Row>
              <Col sm={3} className="modal-label">
                Note:
              </Col>
              <Col sm={9}>{data[selected]?.Note}</Col>
            </Row>
            <br />
          </Container>
          {/* <p>Deadline: {data[selected]?.deadline}</p>
          <p>Last Date to Update Details: {data[selected]?.lastDateUpdate}</p>
          <p>Amount: {data[selected]?.amount}</p>
          <p>Eligibility: {data[selected]?.eligibility}</p>
          <p>Documents Required: {data[selected]?.DocumentsRequired}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <a href="/student-application-form">
            <Button variant="primary">Apply</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Eg;
