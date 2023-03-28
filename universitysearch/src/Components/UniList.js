import React from 'react';

export default function UniList(props) {
  return (
    <div>
      {
        <table className='table'>
          <thead>
          <tr>
            <th>University Name</th>
            <th>Country</th>
            <th>Website</th>
          </tr>
          </thead>
          <tbody>
            {props.setname.length > 0 ?(
              <>
          {props.universities.map(university => (
            <tr key={university.name}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td><a href={university.web_pages}>{university.web_pages}</a></td>
            </tr>

          ))}
          </>):null}
        </tbody>
        </table>
      }
    </div>
  )
}
