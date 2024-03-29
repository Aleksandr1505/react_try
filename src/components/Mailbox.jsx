import React from "react";

// const Mailbox = ({ unreadMessages }) => (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 && (
//         <p>You have {unreadMessages.length} unread messages.</p>
//       )}
//     </div>
//   );

// const Mailbox = (props) => {
//     console.log('props :', props);
//     return(<div>
//             <h1>Hello!</h1>
//           {props.unreadMessages.length > 0 && (
//           <p>You have {props.unreadMessages.length} unread messages.</p>
//           )}
//     </div>)
// }

const Mailbox = props => {
  console.log("props :", props);
  function sum (...rest) {
    let arr = [...rest];
	let s = arr.reduce((acc, el) => acc + el, 0);
	return s;
  }

  return (
    <div>
      <h1>Hello!</h1>
      {props.unreadMessages.length > 0 ? (
        <p>You have {props.unreadMessages.length} unread messages. Sum props: {sum(...props.unreadMessages)} </p>
      ) : (
        <p>No unread messages.</p>
      )}
    </div>
  );
};

export default Mailbox;
