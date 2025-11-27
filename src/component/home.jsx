import BasicTable from './table'
import CheckboxLabels from './filter'
import { useNavigate } from 'react-router-dom';
function LogAnalyserUI() {

      const navigate = useNavigate();

   const goToForm = () => {
    navigate('/form');             
  };
  return (
    <div>
      <CheckboxLabels />  
      <BasicTable />
      <button onClick={goToForm}>FORM</button>
    </div>
  );
}
export default LogAnalyserUI;