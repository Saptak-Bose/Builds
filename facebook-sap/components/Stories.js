import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Clever Sap",
    src: "https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FIMG_20180817_144933.jpg?alt=media&token=c9fe4e61-f74d-4e98-a52a-c5e3da4f8e13",
    profile:
      "https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FCleverSap.jpeg?alt=media&token=03e1119d-9734-4c37-8ca9-28fd68909ac5",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://firebasestorage.googleapis.com/v0/b/instagram-clone2-b8b7b.appspot.com/o/images%2FJeff%20Bezos.png?alt=media&token=11db6a57-8822-45b7-b529-ddeae242d4ee",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
