import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <h2>{title} 2</h2>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
