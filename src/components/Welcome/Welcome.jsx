import { Hero, Title, TitleSpan, SubTitle, List, Item } from "./Welcome.styled";

export const Welcome = () => {
  return (
    <>
      <Hero>
        <Title>
          <TitleSpan> OpenRoad:</TitleSpan>
          <TitleSpan> Your Journey,</TitleSpan>
          <TitleSpan> Your Rules</TitleSpan>
        </Title>
      </Hero>
      <section>
        <SubTitle>Here's exactly what we offer you...</SubTitle>
        <List>
          <Item>
            <h3>
              Embark on a journey of freedom and flexibility with our premier
              car rental service! Unleash the thrill of the open road as you
              choose from our fleet of top-tier vehicles, each meticulously
              maintained for your comfort and safety.
            </h3>
          </Item>
          <Item>
            <h3>
              Whether you're exploring the picturesque countryside or navigating
              the bustling cityscape, our car rental service provides the keys
              to your personalized adventure. With a seamless booking process
              and an array of vehicles suited to every taste and occasion,
              you're not just renting a car – you're embracing a lifestyle of
              convenience.
            </h3>
          </Item>
          <Item>
            <h3>
              Experience the joy of the driver's seat and the liberation to
              chart your own course. From sleek city cruisers to rugged off-road
              explorers, we've got the wheels to match your style. Revel in the
              luxury of choice as you embark on a road trip, a weekend escape,
              or simply elevate your daily commute.
            </h3>
          </Item>
          <Item>
            <h3>
              Our commitment goes beyond just providing a vehicle; it's about
              empowering your journey. Enjoy the assurance of 24/7 support,
              transparent pricing, and a fleet that caters to your preferences.
              Choose us for your next adventure, and let the road become your
              canvas.
            </h3>
          </Item>
          <Item>
            <h3>
              Discover the ease of travel, the thrill of exploration, and the
              joy of driving with our car rental service. Your journey begins
              with us – where every mile is a story waiting to be told.
            </h3>
          </Item>
        </List>
      </section>
    </>
  );
};
