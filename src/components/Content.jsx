import React from "react";

function Content() {
  return (
    <div
      style={{
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30,
      }}
    >
      <h1
        style={{ fontSize: 30 }}
        className="underline decoration-sky-500 font-bold"
      >
        User Management
      </h1>
      <div
        style={{
          marginTop: 50,
          flex: 1,
        }}
      >
        <table className="table-auto mx-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Content;
