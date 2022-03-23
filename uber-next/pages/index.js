import tw from "tailwind-styled-components";
import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
        </Header>
        {/* ActionButton */}
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`;

const ActionItems = tw.div`
  flex-1
`;

const Header = tw.div``;

const UberLogo = tw.img``;
