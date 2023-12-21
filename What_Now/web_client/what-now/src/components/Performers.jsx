import aliceImage from "../images/AliceMadnessReturns.jpg";
import annaImage from "../images/AnnaKendrick.png";
import paulImage from "../images/PaulMcCartney.png";
import robImage from "../images/PancakeManRob.jpg";

const performers = [
  {
    name: "Alice",
    description:
      "Alice blablabla bla blablah blahhblaa bla blaabla blabla bla blaa blaabla blabla",
    image: aliceImage,
  },
  {
    name: "Anna",
    description:
      "Anna blaabla blabla bla blablaa blablablaaa bla blablablaa bla blablaa blabla bla blablah blahhblaa",
    image: annaImage,
  },
  {
    name: "Paul",
    description:
      "Paul blablabablabl bla blablah blahhblaa bla blaabla blabla bla blablaa blablablaaa blaabla blabla bla.",
    image: paulImage,
  },
  {
    name: "Rob",
    description:
      "Rob bla blablablaa bla blablaa blabla bla blablah blahhblaa bla blaabla blabla bla",
    image: robImage,
  },
];

const Performer = (performer) => {
  return (
    <div className={"Performer"}>
      <div>
        <h3>{performer.name}</h3>
        <img
          src={performer.image}
          alt={"Rob dressed as Pancake Man"}
          className={"PerformerImage"}
        />
      </div>
      <div>
        <p>{performer.description}</p>
      </div>
    </div>
  );
};

export const Performers = () => {
  return (
    <div className={"PerformersContainer"}>
      <h2>Performers</h2>
      <div className={"PerformersCards"}>
        {performers.map((performer) => Performer(performer))}
      </div>
    </div>
  );
};
