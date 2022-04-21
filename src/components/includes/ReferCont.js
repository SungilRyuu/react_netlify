import React from 'react';
import {Link} from 'react-router-dom';

function ReferInfo({id, title, desc}){
  return(
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <Link to={{
          pathname: "/refer-detail",
          state: {id, title, desc},
        }}>{desc.slice(0,180)}</Link>
      </td>
  </tr>
  )
}

function referCont(props) {
  return (
    <section className={`refer__cont ${props.color}`}>
      <div className="container">
        <div className="refer__inner">
          <h2>CSS</h2>
          <table>
            <colgroup>
              <col style={{width: "10%"}} />
              <col style={{width: "20%"}} />
              <col style={{width: "70%"}} />
            </colgroup>
            <tbody>
              {props.refer.map(txt => (
                <ReferInfo 
                  key = {txt.id}
                  id = {txt.id}
                  title = {txt.title}
                  desc = {txt.desc}
                />
              ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
export default referCont;