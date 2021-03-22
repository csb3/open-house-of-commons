import "./../components/Home.scss";

export default function Home() {
  return (
    <section class="home">
      <div class="home--left">
        <h2>What is Open House of Commons?</h2>
        <p>Open House of Commons' goal is to make Canadian politics more accessible and engaging to the general public.</p>
        <br />
        <p>Open House of Commons uses graphs to provide an overview of vote results from the House of Commons:  </p>
        <ul>
          <li>See what percentage of MPs voted in favour/against a motion</li>
          <li>See how the yes/no votes are divided by party</li>
        </ul>
      </div>
      <div class="home--right">
        <h2>Get involved - Sign up!</h2>
        <p>Vote on motions and see how Open House of Commons users' votes compare to the original vote. </p>
        <br />
        <p>Provide your constituency information and your MP's vote will automatically be displayed with each vote's summary. </p>
      </div>
    </section>
  )
}