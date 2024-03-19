import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {
  const {setThemeName} = useTheme();

  const handleClick = e => {
    e.stopPropagation()
    setThemeName(e.target.innerText.toLowerCase())
  }
  return (
    <div className="light-switch day" onClick={handleClick}>
      <div className="on">DAY</div>
      <div className="off">NIGHT</div>
    </div>
  );
}

export default LightSwitch;
