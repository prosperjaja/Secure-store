export interface ClientRegistrationFormData {
  // Step 1: Personal Information
  profilePicture?: File;
  firstName?: string;
  lastName?: string;
  gender?: string;
  nationality?: string;
  dateOfBirth?: string;
  focusCommodity?: string;
  idDocument?: File;

  // Step 2: Contact Information
  phoneNumber?: string;
  email?: string;
  contactNationality?: string;
  stateOfOrigin?: string;
  state?: string;
  lga?: string;
  address?: string;
  residentialAddress?: string;
  contactDateOfBirth?: string;
  nationalIdNumber?: string;
  nationalId?: string;

  // Step 3: Bank Details
  accountName?: string;
  accountNumber?: string;
  bankName?: string;

  // Next of Kin
  nextOfKinFullName?: string;
  nextOfKinAddress?: string;
  nextOfKinPhoneNumber?: string;
  nextOfKinEmail?: string;
  nextOfKinRelationship?: string;
  nokFullName?: string;
  nokAddress?: string;
  nokPhone?: string;
  nokEmail?: string;
  nokRelationship?: string;

  // Step 4: Account Linking
  warehouseId?: string;
  occupation?: string;
  occupationDescription?: string;
  description?: string;
}
