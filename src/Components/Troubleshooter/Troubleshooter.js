import "./Troubleshooter.css";

const Troubleshooter = () => {
  return (
    <div>
      <div className="troubleshooter">
        <h2 className="troubleshooterFont">The tool isn't behaving</h2>
        <p>
          Just like everything online, things with the tool get a little wonky
          sometimes! Remember, it's not just you using the tool, there's an
          entire team working with the same program. If you are struggling to
          enter in your information, refresh the page. If that fails, notify a
          <span style={{ color: "red" }}> Team Lead</span> and they will let you
          know where to go from there. Communication is key!
        </p>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
        <h2 className="troubleshooterFont">
          PRO is not returning any search results, or is showing an error page
        </h2>
        <p>
          Occasionally, a PRO will either take too long to deliver an answer
          (HFA is notorious for this), or you will meet an error page when you
          go to the site. If/when this happens, first try again! if the problem
          continues, simply write in the "notes" input, <b>[PRO name] down</b>.
          Example: <b>HFA down</b>.
        </p>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
        <h2 className="troubleshooterFont">
          Ownership percentages do not add up to make a perfect 100%
        </h2>
        <p>
          If you are under 100%, keep searching until you exhaust all PROs. If
          it is above, you're done!
        </p>
        <h3>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h3>
        <h2 className="troubleshooterFont">
          I can't prove a connection between a work and the writers, but I know
          the song details very well. Can I take that?
        </h2>
        <p>
          Yes you can! If you listen to any genre of music, you will most likely
          recognize songs here and there. If you know the details and you find
          it on a PRO, that's perfectly fine to take.
        </p>
      </div>
    </div>
  );
};

export default Troubleshooter;
