import { FaCheck, FaTimes } from "react-icons/fa";

const Compare = () => {
  return (
    <div className="table ">
      <table className="table table-striped table-border ">
        <thead className="border-light ">
          <tr>
            <th scope="col">
              <span className="h3 font-weight-bold text-warning">
                Tarczycowy
              </span>
            </th>
            <th scope="col">
              <strong>MINI</strong>
            </th>
            <th scope="col">
              <strong>MIDI</strong>
            </th>
            <th scope="col">
              <strong>MAXI</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">TSH</th>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
          <tr>
            <th scope="row">FT3</th>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
          <tr>
            <th scope="row">FT4</th>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
          <tr>
            <th scope="row">aTG</th>
            <td>
              <FaTimes className="text-danger center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
          <tr>
            <th scope="row">aTPO</th>
            <td>
              <FaTimes className="text-danger center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
          <tr>
            <th scope="row">TRAb</th>
            <td>
              <FaTimes className="text-danger center" />
            </td>
            <td>
              <FaTimes className="text-danger center" />
            </td>
            <td>
              <FaCheck className="text-success center" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
