
const Step3 = ({ data, setData, errors }) => (
  <div>
    <div className="mb-4">
      <label className="block mb-1">Parent's Name</label>
      <input type="text" value={data.parentName} onChange={e => setData(d => ({ ...d, parentName: e.target.value }))} className="w-full border p-2 rounded" />
      {errors.parentName && <p className="text-red-500 text-sm">{errors.parentName}</p>}
    </div>
    <div className="mb-4">
      <label className="block mb-1">Email</label>
      <input type="email" value={data.email} onChange={e => setData(d => ({ ...d, email: e.target.value }))} className="w-full border p-2 rounded" />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </div>
    <div>
      <label className="block mb-1">Phone Number</label>
      <input type="text" value={data.phone} onChange={e => setData(d => ({ ...d, phone: e.target.value }))} className="w-full border p-2 rounded" />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>
  </div>
);

export default Step3;
