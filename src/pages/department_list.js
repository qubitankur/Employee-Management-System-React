import React from 'react'
import Table from 'react-bootstrap/Table'
export default function Department_list() {

const data = [
  {
    firstName: 'Alice',
    middleName: 'Lex'
    lastName: 'Johnson',
    department: '',
    position: '',
    action: ''
  }
];

    return (
        <div>
        <div className='container-fluid'>
        <div className='row'>
        <div className='col'>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>Employee No</th>
      <th>Middle Name</th>
      <th>Last Name</th>
      <th>Department</th>
      <th>Position</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody >
  	{data.map((data, index)=>(
    <tr>
      <td>{data.firstName}</td>
      <td>{data.middleName}</td>
      <td>{data.lastName}</td>
      <td>{data.department}</td>
      <td>{data.position}</td>
      <td>{data.action}</td>
    </tr>
    ))}
  </tbody>
</Table>
</div>
</div>
</div>
</div>
    )
}
