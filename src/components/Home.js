import "./../components/Home.scss";

export default function Home() {
  return (
    <div className="split-containers">
      <div className="home-left-container">
        <h1>What is Open House of Commons?</h1>
        <div className="about">
          <div>Open House of Commons' goal is to make Canadian politics more accessible and engaging to the general public.</div>
          <div>Open House of Commons uses graphs to provide an overview of vote results from the House of Commons:
          </div>
          <ul>
            <li>See what percentage of MPs voted in favour/against a motion</li>
            <li>See how the yes/no votes are divided by party</li>
          </ul>
        </div>
        

        <h2>Get involved - Sign up!</h2>
        <div className="get-involved">
          <div>Vote on motions and see how Open House of Commons users' votes compare to the original vote.</div>

          <div>Provide your constituency information and your MP's vote will automatically be displayed with each vote's summary.</div>
        </div>

        <div className="maple">
          <div>Made with 🍁 by</div>
          <div>Cass Bredeson, Chan-oon Na, and Melanie Tong</div>
        </div>
      </div>

      <div className="home-right-container">
        
      </div>
    </div>
  );
}