import React from "react";
import { instructiondata } from "../data/instructiondata";
const Testinstruction = () => {
  return (
    <>
      {instructiondata.map((items, index) => (
        <div className="flex flex-col justify-center">
          <h6 className="text-primary font-bold text-3xl my-5">
            General Instructions:
          </h6>
          <ul>
            <li>{items.in1}</li>
            <li>{items.in2}</li>
            <li>{items.in3} </li>
            <li>{items.in3_1}</li>
            <li>{items.in3_2}</li>
            <li>{items.in3_3}</li>
            <li>{items.in4}</li>
            <li>{items.in5}</li>
            <li>{items.in6}</li>
            <table className="my-5">
              <tbody className="border bottom-2 gap-5">
                <tr>
                  <th>{items.t_heading}</th>
                  <th>{items.t_heading2}</th>
                  <th>{items.t_heading3}</th>
                  <th>{items.t_heading4}</th>
                </tr>
                <tr>
                  <td>{items.sdata}</td>
                  <td>{items.sdata2}</td>
                  <td>{items.sdata3}</td>
                  <td>{items.sdata4}</td>
                </tr>
                <tr>
                  <td>{items.ndata}</td>
                  <td>{items.ndata2}</td>
                  <td>{items.ndata3}</td>
                  <td>{items.ndata4}</td>
                </tr>
                <tr>
                  <td>{items.mdata}</td>
                  <td>{items.mdata2}</td>
                  <td>{items.mdata3}</td>
                  <td>{items.mdata4}</td>
                </tr>
                <tr>
                  <td>{items.tdata}</td>
                  <td>{items.tdata2}</td>
                  <td>{items.tdata3}</td>
                  <td>{items.tdata4}</td>
                </tr>
              </tbody>
            </table>
          </ul>
          <h1 className="text-primary font-bold text-3xl my-5">
            {items.heading2}
          </h1>
          <ul>
            <li>{items.in7}</li>
            <li>{items.in7_1}</li>
            <li>{items.in7_2}</li>
            <li>{items.in7_3}</li>
            <li>{items.in7_4}</li>
            <li>{items.in8}</li>
            <li>{items.in9}</li>
            <li>{items.in10}</li>
            <li>{items.in11}</li>
          </ul>

          <h1 className="text-primary font-bold text-3xl my-5">
            {items.heading3}
          </h1>
          <ul>
            <li>{items.in12}</li>

            <li>{items.in13}</li>
            <li>{items.in14}</li>
            <li>{items.in15}</li>
            <li>{items.in16}</li>
            <li>{items.in17}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Testinstruction;
