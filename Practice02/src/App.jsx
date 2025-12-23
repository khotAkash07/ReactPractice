import Skills from "./CheckBoxOps";
import InputField from "./InputFieldDemo";
import OpsCheckBox from "./CheckBoxOps02";
import RedioButtonOps from "./RedioButtonOps";
import MapLoopDemo from "./LoopsMap";

function App() {
  return (
    <div className="ml-19">
      <table>
        <tbody>
          <tr>
            <td>
              <InputField />
            </td>
            <td>
              <div className="ml-15">
                <Skills />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="mt-15 ml-15">
                <OpsCheckBox />
              </div>
            </td>
            <td>
              <div className="mt-15 ml-15">
                <RedioButtonOps />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="ml-15">
        <MapLoopDemo />
      </div>
    </div>
  );
}

export default App;
