// src/UserData.js

const UserData = ({ users, rowStyle, tdStyle }) => {
    return (
      <>
        {users.map((curUser) => {
          const {
            id,
            name,
            color,
            capacity,
            price,
            generation,
            description
          } = curUser;
  
          const cpuModel = curUser['CPU model'];
          const hardDiskSize = curUser['hard disk size'];
          const strapColour = curUser['Strap Colour'];
          const caseSize = curUser['Case Size'];
          const screenSize = curUser['Screen Size'];
  
          return (
            <tr key={id} style={rowStyle}>
              <td style={tdStyle}>{id}</td>
              <td style={tdStyle}>{name}</td>
              <td style={tdStyle}>{color || '-'}</td>
              <td style={tdStyle}>{capacity || '-'}</td>
              <td style={tdStyle}>{price || '-'}</td>
              <td style={tdStyle}>{generation || '-'}</td>
              <td style={tdStyle}>{cpuModel || '-'}</td>
              <td style={tdStyle}>{hardDiskSize || '-'}</td>
              <td style={tdStyle}>{strapColour || '-'}</td>
              <td style={tdStyle}>{caseSize || '-'}</td>
              <td style={tdStyle}>{description || '-'}</td>
              <td style={tdStyle}>{screenSize || '-'}</td>
            </tr>
          );
        })}
      </>
    );
  };
  
  export default UserData;
  