import { useEffect, useState } from "react";

import API from "./services/api";

import Header from "./components/Header";
import Metrics from "./components/Metrics";
import SubscriptionForm from "./components/SubscriptionForm";
import SubscriptionTable from "./components/SubscriptionTable";
import Toast from "./components/Toast";

function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  const [metrics, setMetrics] = useState({
    totalMonthlyBurn: 0,
    upcomingRenewalCount: 0,
  });

  const [toast, setToast] = useState("");

  const loadData = async () => {
    try {
      const res = await API.get("/subscriptions");

      setSubscriptions(res.data.subscriptions);
      setMetrics(res.data.metrics);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const addSubscription = async (formData) => {
    try {
      await API.post("/subscriptions", formData);

      setToast("Subscription Added Successfully");

      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const toggleSubscription = async (id) => {
    try {
      await API.patch(`/subscriptions/${id}/toggle`);

      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteSubscription = async (id) => {
    try {
      await API.delete(`/subscriptions/${id}`);

      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Header />

      <Metrics metrics={metrics} />

      <SubscriptionForm onAdd={addSubscription} />

      <SubscriptionTable
        subscriptions={subscriptions}
        onToggle={toggleSubscription}
        onDelete={deleteSubscription}
      />

      <Toast message={toast} />
    </div>
  );
}

export default App;