Edit and delete buttons: 
<div className="edit-btn-container">
      <NavLink className="edtBtn" to={`/Apartment/${id}/Edit`}>
        <span>Edit</span>
      </NavLink>
    </div>
    <div className="dlt-btn-container">
      <ApartmentDelete id={id} />
    </div>