import Form from "react-bootstrap/form";
import "./Checklist.css";

const Checklist = () => {
  return (
    <div className="checklist">
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Release Date" />
        <Form.Check type="checkbox" label="Check Spotify for Writers" />
        <Form.Check type="checkbox" label="Search all PROs" />
        <Form.Check
          type="checkbox"
          label="Check Discogs, Wikipedia, and Bandcamp"
        />
        <Form.Check type="checkbox" label="Don't Forget you ISWC!" />
      </Form.Group>
    </div>
  );
};

export default Checklist;
