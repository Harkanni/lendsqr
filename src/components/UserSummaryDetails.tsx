import React from 'react';
import { UserDetails as UserProps } from '../utils/types';

const UserDetails = ({ userInfo }: { userInfo: UserProps | null }) => {

   function subtractAmount(amountStr: any = '₦100000', subtractValue: number) {
      // Step 1: Remove the currency symbol and commas
      let numericValue = parseFloat(amountStr.replace(/[₦,]/g, ''));

      // Step 2: Subtract the given value
      let updatedValue = numericValue - subtractValue;

      // Step 3: Format the result back to currency string
      let formattedValue = `₦${updatedValue.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;

      // Step 4: Return the formatted string
      return `${formattedValue} - ${amountStr}`;
   }

   return (
      <div className="user-details-section" style={{}}>
         <section className="personal-info">
            <h3 style={{ fontWeight: '500', fontSize: '16px' }}>Personal Information</h3>
            <div className="info-group">
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.fullName}</p>
                  <strong className='info-strong'>Full Name:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.personalInfo.email}</p>
                  <strong className='info-strong'>Email Address:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.personalInfo.phone}</p>
                  <strong className='info-strong'>Phone Number:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.bank.bvn}</p>
                  <strong className='info-strong'>BVN:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.personalInfo.gender}</p>
                  <strong className='info-strong'>Gender:</strong>
               </div>

               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.personalInfo.maritalStatus}</p>
                  <strong className='info-strong'>Marital Status</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.personalInfo.children}</p>
                  <strong className='info-strong'>Children</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.personalInfo.typeOfResidence}</p>
                  <strong className='info-strong'>Types Of Residence</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>07060780922</p>
                  <strong className='info-strong'>BVN:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> Female</p>
                  <strong className='info-strong'>Gender:</strong>
               </div>
            </div>

            <hr className='divider' />
         </section>

         <section className="education-info">
            <h3 style={{ fontWeight: '500', fontSize: '16px' }}>Education and Employment</h3>
            <div className="info-group">
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.employmentInfo.levelOfEducation}</p>
                  <strong className='info-strong'>LEVEL OF EDUCATION</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.employmentInfo.employmentStatus}</p>
                  <strong className='info-strong'>EMPLOYMENT STATUS</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.employmentInfo.sectorOfEmployment}</p>
                  <strong className='info-strong'>SECTOR OF EMPLOYMENT</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.employmentInfo.durationOfEmployment}</p>
                  <strong className='info-strong'>DURATION OF EMPLOYMENT</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.employmentInfo.officeEmail}</p>
                  <strong className='info-strong'>OFFICE EMAIL</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> { subtractAmount(userInfo?.employmentInfo.monthlyIncome, 10000) } </p>
                  <strong className='info-strong'>Monthly Income</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.employmentInfo.loanRepayment} </p>
                  <strong className='info-strong'>Loan Repayment</strong>
               </div>
            </div>

            <hr className='divider' />
         </section>

         <section className="social-info">
            <h3 style={{ fontWeight: '500', fontSize: '16px' }}>Socials</h3>
            <div className="info-group">
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.socials.twitter} </p>
                  <strong className='info-strong'>TWITTER</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.socials.facebook}</p>
                  <strong className='info-strong'>FACEBOOK</strong>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.socials.instagram} </p>
                  <strong className='info-strong'>INSTAGRAM</strong>
               </div>
            </div>

            <hr className='divider' />
         </section>

         <section className="guarantor-info">
            <h3 style={{ fontWeight: '500', fontSize: '16px' }}>Guarantor</h3>
            <div className="info-group">
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.guarantor.fullName} </p>
                  <strong className='info-strong'>Full Name:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.phone}</p>
                  <strong className='info-strong'>Phone Number:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.email}</p>
                  <strong className='info-strong'>Email Address:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.relationship}</p>
                  <strong className='info-strong'>Relationship</strong>
               </div>
            </div>
            <hr className='divider' />
         </section>

         <section className="guarantor-info" style={{ marginTop: '4rem' }}>
            <div className="info-group">
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'> {userInfo?.guarantor.fullName} </p>
                  <strong className='info-strong'>Full Name:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.phone}</p>
                  <strong className='info-strong'>Phone Number:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.email}</p>
                  <strong className='info-strong'>Email Address:</strong>
               </div>
               <div style={{ flex: 1, display: 'flex', flexDirection: 'column-reverse', gap: '0.35rem' }}>
                  <p className='info-p'>{userInfo?.guarantor.relationship}</p>
                  <strong className='info-strong'>Relationship</strong>
               </div>
            </div>
         </section>
      </div>
   );
};

export default UserDetails;
