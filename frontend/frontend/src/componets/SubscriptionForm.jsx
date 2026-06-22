import { useState } from "react";

function SubscriptionForm({ onAdd }) {
const [formData, setFormData] = useState({
name: "",
cost: "",
billingCycle: "monthly",
nextRenewalDate: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

```
onAdd(formData);

setFormData({
  name: "",
  cost: "",
  billingCycle: "monthly",
  nextRenewalDate: "",
});
```

};

return ( <form className="form" onSubmit={handleSubmit}> <input
     type="text"
     name="name"
     placeholder="Service Name"
     value={formData.name}
     onChange={handleChange}
     required
   />

```
  <input
    type="number"
    name="cost"
    placeholder="Cost"
    value={formData.cost}
    onChange={handleChange}
    required
  />

  <select
    name="billingCycle"
    value={formData.billingCycle}
    onChange={handleChange}
  >
    <option value="monthly">Monthly</option>
    <option value="yearly">Yearly</option>
  </select>

  <input
    type="date"
    name="nextRenewalDate"
    value={formData.nextRenewalDate}
    onChange={handleChange}
    required
  />

  <button type="submit">
    Add Subscription
  </button>
</form>


);
}

export default SubscriptionForm;
