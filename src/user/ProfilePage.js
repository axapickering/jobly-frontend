import { Navigate, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext, useState } from "react";
import Alert from "../Alert";

function ProfilePage({ handleSubmit }) {

    const navigate = useNavigate();
    const userInfo = useContext(userContext);

    const [formData,setFormData] = useState(userInfo);
    const [alerts,setAlerts] = useState(null);

    function handleChange(evt) {
        const { name , value } = evt.target;
        if (name != 'username') {
            setFormData(oldData => ({ ...oldData, [name]: value }));
        }
    }

    async function onSubmit(evt) {
        evt.preventDefault();

        try {
            await handleSubmit(formData);
            setFormData(userInfo);
            setAlerts({msgs:["Updated successfully"],color:"success"})
        } catch(err) {
            setAlerts({msgs:[err],color:"danger"});
        }
    }

    return (
        <div style={{ width: '400px' }}>
          <form onSubmit={onSubmit}>

            <div className="form-group">
              <label htmlFor="username" className="text-white">Username</label>
              <input className="form-control"
                name="username"
                placeholder={formData.username}
                readOnly
              />
            </div>

            <div className="form-group">
              <label htmlFor="firstName" className="text-white">First Name</label>
              <input type="firstName"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="text-white">Last Name</label>
              <input type="lastName"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="text-white">Email</label>
              <input type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">Submit</button>

          </form>
          {alerts && (<Alert alerts={alerts.msgs} color={alerts.color}/>)}
        </div>

      );



}

export default ProfilePage;