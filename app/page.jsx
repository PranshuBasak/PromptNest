import Feed from '@components/Feed'

const Home = () => (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
      Promptnest
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> Spark Creativity, Share Prompts</span>
      </h1>
      <p className="desc text-center">PromptNest is a dynamic full-stack application designed to serve as a hub for creative minds to share, explore, and engage with prompts across various genres and mediums.</p>

      <Feed />
    </section>
  );

export default Home