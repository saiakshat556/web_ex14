import React, { useState } from "react";

function NovellLogin() {
  const [data, setData] = useState({
    user: "",
    pass: "",
    city: "",
    server: "",
    role: "",
    signOn: [],
  });

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setData((d) => ({
        ...d,
        signOn: checked
          ? [...d.signOn, value]
          : d.signOn.filter((v) => v !== value),
      }));
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const reset = () => {
    setData({
      user: "",
      pass: "",
      city: "",
      server: "",
      role: "",
      signOn: [],
    });
  };

  return (
    <form onSubmit={submit}>
      <h2>Novell Login</h2>

      <div>
        <label>Username:</label>
        <input name="user" value={data.user} onChange={change} />
      </div>

      <div>
        <label>Password:</label>
        <input type="password" name="pass" value={data.pass} onChange={change} />
      </div>

      <div>
        <label>City:</label>
        <input name="city" value={data.city} onChange={change} />
      </div>

      <div>
        <label>Server:</label>
        <select name="server" value={data.server} onChange={change}>
          <option value="">Select</option>
          <option value="Server 1">Server 1</option>
          <option value="Server 2">Server 2</option>
          <option value="Server 3">Server 3</option>
        </select>
      </div>

      <div>
        <label>Role:</label>
        {["Admin", "Engineer", "Manager", "Guest"].map((r) => (
          <label key={r}>
            <input
              type="radio"
              name="role"
              value={r}
              checked={data.role === r}
              onChange={change}
            />
            {r}
          </label>
        ))}
      </div>

      <div>
        <label>Sign-on:</label>
        {["Mail", "Payroll", "Self-service"].map((s) => (
          <label key={s}>
            <input
              type="checkbox"
              name="signOn"
              value={s}
              checked={data.signOn.includes(s)}
              onChange={change}
            />
            {s}
          </label>
        ))}
      </div>

      <button type="submit">Login</button>
      <button type="button" onClick={reset}>Reset</button>
    </form>
  );
}

export default NovellLogin;
