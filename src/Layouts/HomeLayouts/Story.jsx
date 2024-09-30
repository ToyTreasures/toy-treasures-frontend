import BackgroundImage from "../../assets/story-bg.jpg";

const Story = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-28 px-6 my-20 bg-black bg-opacity-30 bg-blend-overlay bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <div className="flex flex-col items-center text-center max-w-2xl mb-4">
          <h3 className="text-base font-semibold mb-4 tracking-wider">
            About The Shop
          </h3>
          <h2 className="text-5xl font-bold mb-6 text-[--secondary-color]">
            Watch Our Story
          </h2>
          <p className="text-lg font-semibold ">
            ToysCity is transforming how families handle children's toys by
            providing a platform for exchanging and selling pre-loved items,
            reducing waste and costs. Our user-friendly interface encourages
            sustainable practices and teaches kids about resource conservation.
            We plan to expand with eco-friendly new toys and a donation feature
            to help children in need. Join us in fostering a community focused
            on reuse, joy, and generosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;
