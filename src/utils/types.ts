// src/types/types.ts

export interface UserCredentials {
   email: string, 
   password: string
}

export interface Users {
   id: string;
   email: string;
   status: string;
   fullName: string;
   dateJoined: string;
   phoneNumber: string;
   organization: string;
}

export interface UserDetails {
   id: string;
   fullName: string;
   userTier: number;
   status: string;
   personalInfo: {
      phone: string;
      email: string;
      gender: string;
      maritalStatus: string;
      children: number;
      typeOfResidence: string;
   };
   employmentInfo: {
      levelOfEducation: string;
      employmentStatus: string;
      sectorOfEmployment: string;
      durationOfEmployment: string;
      officeEmail: string;
      monthlyIncome: string;
      loanRepayment: string;
      organization: string;
   };
   bank: {
      name: string;
      accountNumber: string;
      bvn: string;
   };
   socials: {
      twitter: string;
      facebook: string;
      instagram: string;
   };
   guarantor: {
      fullName: string;
      phone: string;
      email: string;
      relationship: string;
   };
}

export interface UserContextType {
   userList: Users[];
   userDetails: UserDetails[];
   fetchUserData: () => void;
   fetchUserDetails: () => void;
   updateUserStatus: (userId: string, newStatus: string) => void;
}
