import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import OrderHistory from "../components/Profile/OrderHistory";
import { userAtom } from "../state";
import "../components/Profile/Profile.css";

function Profile() {
  const [orders, setOrders] = useState([]);
  const [user] = useAtom(userAtom);

  async function getOrders() {
    const result = await axios.get(
      `http://localhost:1337/orders?users_permissions_user=${user.id}`,
      { withCredentials: true }
    );
    console.log(result.data);
    setOrders(result.data);
  }

  useEffect(() => {
    if (user) {
      getOrders();
    }
  }, [user]);

  return (
    <div className="page-container">
      <OrderHistory orders={orders} />
    </div>
  );
}

export default Profile;
