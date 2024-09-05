import React, { useEffect, useState } from "react";
import API from "../../../../api/common/messages.api";
import Row from "./RowTablsMessage";
const { getMessages } = API;

const Messages = ({ switchView }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await getMessages();
      setData(response.data);
      console.log("hola", response.data);
      console.log("hol2", data);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h5>Messages</h5>
      <div className="card shadow mb-4 mt-5">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            List of Messages{" "}
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Author</th>
                  <th>Email</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th> </th>
                </tr>
              </thead>

              <tbody>
                {data.map((e) => {
                  return <Row data={e} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* {message && <p className="mt-3">{message}</p>} */}
    </div>
  );
};

export default Messages;
