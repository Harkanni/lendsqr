import React from 'react';

const UserDetails = () => {
  return (
    <div className="user-details-section">
      <section className="personal-info">
        <h3>Personal Information</h3>
        <div className="info-group">
          <p><strong>Full Name:</strong> Grace Effiom</p>
          <p><strong>Phone Number:</strong> 07060780922</p>
          <p><strong>Email Address:</strong> grace@gmail.com</p>
          <p><strong>BVN:</strong> 07060780922</p>
          <p><strong>Gender:</strong> Female</p>
        </div>
        <div className="info-group">
          <p><strong>Marital Status:</strong> Single</p>
          <p><strong>Children:</strong> None</p>
          <p><strong>Type of Residence:</strong> Parent's Apartment</p>
        </div>
      </section>

      <section className="education-info">
        <h3>Education and Employment</h3>
        <div className="info-group">
          <p><strong>Level of Education:</strong> B.Sc</p>
          <p><strong>Employment Status:</strong> Employed</p>
          <p><strong>Sector of Employment:</strong> FinTech</p>
          <p><strong>Duration of Employment:</strong> 2 years</p>
        </div>
        <div className="info-group">
          <p><strong>Office Email:</strong> grace@lendsqr.com</p>
          <p><strong>Monthly Income:</strong> ₦200,000.00 - ₦400,000.00</p>
          <p><strong>Loan Repayment:</strong> 40,000</p>
        </div>
      </section>

      <section className="social-info">
        <h3>Socials</h3>
        <div className="info-group">
          <p><strong>Twitter:</strong> @grace_effiom</p>
          <p><strong>Facebook:</strong> Grace Effiom</p>
          <p><strong>Instagram:</strong> @grace_effiom</p>
        </div>
      </section>

      <section className="guarantor-info">
        <h3>Guarantor</h3>
        <div className="info-group">
          <p><strong>Full Name:</strong> Debby Ogana</p>
          <p><strong>Phone Number:</strong> 07060780922</p>
          <p><strong>Email Address:</strong> debby@gmail.com</p>
          <p><strong>Relationship:</strong> Sister</p>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
