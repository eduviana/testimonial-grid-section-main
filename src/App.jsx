import daniel from "./assets/images/image-daniel.jpg";
import jonathan from "./assets/images/image-jonathan.jpg";
import jeanette from "./assets/images/image-jeanette.jpg";
import patrick from "./assets/images/image-patrick.jpg";
import kira from "./assets/images/image-kira.jpg";
import "./App.scss";

function App() {
  return (
    <section className="grid">
      <article className="grid-item item-1">
        <div className="bg-quotes"></div>
        <div className="card">
          <div className="profile">
            <img src={daniel} className="profile-img" alt="profile picture" />
            <div className="profile-info">
              <h3 className="name text-light">Daniel Clifford</h3>
              <p className="status text-light">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial ">
            <p className="text text-light">
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </p>
          </div>
          <div className="experience">
            <p className="text text-light">
              "I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup. "
            </p>
          </div>
        </div>
      </article>
      <article className="grid-item item-2">
        <div className="card">
          <div className="profile">
            <img src={jonathan} className="profile-img" alt="profile picture" />
            <div className="profile-info">
              <h3 className="name text-light">Jonathan Walters</h3>
              <p className="status text-light">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial">
            <p className="text text-light">
              The team was very supportive and kept me motivated
            </p>
          </div>
          <div className="experience">
            <p className="text text-light">
              {" "}
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself. ”
            </p>
          </div>
        </div>
      </article>
      <article className="grid-item item-3">
        <div className="card">
          <div className="profile">
            <img src={jeanette} className="profile-img" alt="profile picture" />
            <div className="profile-info">
              <h3 className="name text-dark">Jeanette Harmon</h3>
              <p className="status text-dark">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial">
            <p className="text text-dark">
              An overall wonderful and rewarding experience
            </p>
          </div>
          <div className="experience">
            <p className="text text-dark">
              {" "}
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </p>
          </div>
        </div>
      </article>

      <article className="grid-item item-4">
        <div className="card">
          <div className="profile">
            <img src={patrick} className="profile-img" alt="profile picture" />
            <div className="profile-info">
              <h3 className="name text-light">Patrick Abrams</h3>
              <p className="status text-light">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial">
            <p className="text text-light">
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </p>
          </div>
          <div className="experience">
            <p className="text text-light">
              {" "}
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </p>
          </div>
        </div>
      </article>

      <article className="grid-item item-5">
        <div className="card">
          <div className="profile">
            <img src={kira} className="profile-img" alt="profile picture" />
            <div className="profile-info">
              <h3 className="name text-dark">Kira Whittle</h3>
              <p className="status text-dark">Verified Graduate</p>
            </div>
          </div>
          <div className="testimonial">
            <p className="text text-dark">
              Such a life-changing experience. Highly recommended!
            </p>
          </div>
          <div className="experience">
            <p className="text text-dark">
              {" "}
              “ Before joining the bootcamp, I’ve never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </p>
          </div>
        </div>
      </article>
      {/* <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Eduardo Viana</a>.
      </div> */}
    </section>
  );
}

export default App;
