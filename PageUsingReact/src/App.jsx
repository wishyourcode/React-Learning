import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1767635503652-784d6b76994b?q=80&w=709&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Prime customers, that have access to bank credit and are satisfied with the current product",
      tags: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661765873819-2dd94bd32016?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "An intro is short for introduction, serving as a brief opening to provide context, hook an audience, or set the stage for content like a song, video, book, or speech",
      tags: " Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661633081241-fc3d49b7e833?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "It can be a musical passage, a short animated video sequence, or the opening paragraph of an essay",
      tags: " Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661777467209-d1fb895cd266?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "designed to grab attention and establish the topic or brand. Effective intros establish credibility and emotional connection",
      tags: "Unsatisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661774723035-de53c21c9838?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Interchange Intro: A popular beginner-level American English textbook by Jack C. Richards.",
      tags: "UnderBanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661722243182-ac6e3f12d879?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "Winton Oil Colour Intro Set: A starter kit for artists containing essential oil paint colors.",
      tags: "Satisfied",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
