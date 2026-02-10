import { createRoot } from 'react-dom/client'
const myelement = (
  <table>
    <tr>
    <th>Name</th>
    </tr>
    <tr>
      <td>Diane</td>
    </tr>
    
    <tr>
      <td>Hope</td>
    </tr>
  </table>
);

createRoot(document.getElementById('root')!).render(myelement)    //! for null 
