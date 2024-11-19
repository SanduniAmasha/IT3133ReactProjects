import './App.css';
import StudentTable from './components/StudentTable';
import { students } from './data/StudentsDb';

function App() {
  return (
    <div className="App">
      <h2>Student Information Portal</h2>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
