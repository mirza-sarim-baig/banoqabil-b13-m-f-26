import { Link } from "react-router";

const AdminCard = ({ user }) => {
  let userId = user.id;
  console.log("user", userId);

  return (
    <div className="max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">
          {user.name.firstname.toUpperCase()}
          {user.name.lastname.toUpperCase()}
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-slate-500">@{user.username}</p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-5 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Email
          </p>
          <p className="text-sm font-medium text-slate-800">{user.email}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Phone
          </p>
          <p className="text-sm font-medium text-slate-800">{user.phone}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Address
          </p>
          <p className="text-sm font-medium text-slate-800 capitalize">
            {user.address.number} {user.address.street}, {user.address.city}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Zip Code
          </p>
          <p className="text-sm font-medium text-slate-800">
            {user.address.zipcode}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">
            Geo Location
          </p>
          <p className="text-sm font-medium text-slate-800">
            {user.address.geolocation.lat}, {user.address.geolocation.long}
          </p>
        </div>

        <Link to={`${user.id}`}>View Profile</Link>
      </div>
    </div>
  );
};

export default AdminCard;
