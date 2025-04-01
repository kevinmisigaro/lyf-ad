export interface User {
    age: number | null;
    allergy: string | null;
    blood_group: string | null;
    call_fee: number | null;
    call_payment_id: string | null;
    consultation_availabiliy: string;
    consultation_fee: number;
    consultation_payment_id: string | null;
    country: string;
    currency: string | null;
    dateOfBirth: string | null;
    doctor_bio: string | null;
    doctorsIDverificationStatus: string;
    email: string;
    experience: string | null;
    firstName: string;
    gender: string | null;
    lastName: string;
    lastOnlineTime: string;
    onlineStatus: number;
    phone: string;
    phone_availability: string;
    registration_source: string;
    status: string;
    userID: number;
    user_image: string;
    userPromotionCode: string;
    userRole: number
  }

export interface Hospital {
    address: string;
    areaOfSpecialization: string;
    areaOfSpecialization_image: string;
    specializationAreaID: number;
    timeStamp: string;
    verificationStatus: string | null;
  }
  