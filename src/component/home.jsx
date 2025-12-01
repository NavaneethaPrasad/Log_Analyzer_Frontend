import BasicTable from './table'
import CheckboxLabels from './filter'

function LogAnalyserUI() {

  return (
    <div>
      <div className="mb-15">
        <CheckboxLabels />  
      </div>

      <BasicTable />
    </div>
  );
}

export default LogAnalyserUI;
