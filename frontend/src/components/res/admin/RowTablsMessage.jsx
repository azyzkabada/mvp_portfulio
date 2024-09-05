import React, { useEffect, useState } from "react";
import API from "../../../../api/common/messages.api.js";

const { toggleReadStatus } = API;

function Row({ data }) {
  const [rowData, setRowData] = useState({});
  const [display, setDisplay] = useState(null);

  useEffect(() => {
    setRowData(data);
    setDisplay(data.display);
  }, [data]);

  const rowStyle = {
    backgroundColor: rowData.isRead ? "transparent" : "#FFCCCC",
  };

  const buttonStyle = {
    padding: "5px 10px",
    cursor: "pointer",
    backgroundColor: rowData.isRead ? "lightgreen" : "lightcoral",
    color: rowData.isRead ? "darkgreen" : "darkred",
  };

  const toggleRead = async () => {
    const newReadStatus = !rowData.isRead;
    setRowData((prevData) => ({ ...prevData, isRead: newReadStatus }));
    try {
      await toggleReadStatus(rowData.id);
    } catch (error) {
      console.error("Failed to toggle read status:", error);
      setRowData((prevData) => ({ ...prevData, isRead: !newReadStatus }));
    }
  };

  return (
    <tr style={rowStyle}>
      <td>{rowData.id}</td>
      <td>{rowData.authorFullName}</td>
      <td>{rowData.email}</td>
      <td>{rowData.content}</td>
      <td>
        {rowData.createdAt
          ? new Date(rowData.createdAt).toLocaleString()
          : "..."}
      </td>
      <td className="d-flex">
        <button
          className="btn btn-primary mx-2"
          style={buttonStyle}
          onClick={toggleRead}
        >
          {rowData.isRead ? "Mark as Unread" : "Mark as Read"}
        </button>
      </td>
    </tr>
  );
}

export default Row;
