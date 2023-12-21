import robImage from "../images/PancakeManRob.jpg";

const performers = [
  {
    name: "Alice",
    description:
      "Alice blablabla bla blablah blahhblaa bla blaabla blabla bla blaa blaabla blabla",
    image: robImage,
  },
  {
    name: "Anna",
    description:
      "Anna blaabla blabla bla blablaa blablablaaa bla blablablaa bla blablaa blabla bla blablah blahhblaa",
    image: robImage,
  },
  {
    name: "Paul",
    description:
      "Rob blablabablabl bla blablah blahhblaa bla blaabla blabla bla blablaa blablablaaa blaabla blabla bla.",
    image: robImage,
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
        <img
          src={performer.image}
          alt={"Rob dressed as Pancake Man"}
          className={"PerformerImage"}
        />
      </div>
      <div>
        <h3>{performer.name}</h3>
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
