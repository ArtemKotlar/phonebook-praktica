// import PT from 'prop-types';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, numder }) => (
          <li key={id} id={id} name={name} numder={numder} onDelete={onDelete}>
            {/* <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;

// ContactsList.propTypes = {
//   contacts: PT.arrayOf(
//     PT.exact({
//       id: PT.string,
//       name: PT.string,
//       number: PT.string,
//     })
//   ),
//   onDelete: PT.func,
// };
