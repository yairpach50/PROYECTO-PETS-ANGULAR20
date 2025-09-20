import { Routes } from '@angular/router';

// OWNER
import { Getall } from './components/owner/getallowner/getallowner';
import { CreateOwner } from './components/owner/createowner/createowner';
import { UpdateOwner } from './components/owner/updateowner/updateowner';

// PET
import { GetallPet } from './components/pet/getallpet/getallpet';
import { CreatePet } from './components/pet/createpet/createpet';
import { UpdatePet } from './components/pet/updatepet/updatepet'; 

// APPOINTMENT
import { GetallAppointment } from './components/appointment/getallappointment/getallappointment';
import { CreateAppointment } from './components/appointment/createappointment/createappointment';
import { UpdateAppointment } from './components/appointment/updateappointment/updateappointment';

// LABORATORY
import { GetallLaboratory } from './components/laboratory/getalllaboratory/getalllaboratory';
import { CreateLaboratory } from './components/laboratory/createlaboratory/createlaboratory';
import { UpdateLaboratory } from './components/laboratory/updatelaboratory/updatelaboratory';

// MEDICALHISTORY
import { GetallMedicalHistory } from './components/medicalhistory/getallmedicalhistory/getallmedicalhistory';
import { CreateMedicalHistory } from './components/medicalhistory/createmedicalhistory/createmedicalhistory';
import { UpdateMedicalHistory } from './components/medicalhistory/updatemedicalhistory/updatemedicalhistory';

// MEDICINE
import { GetallMedicine } from './components/medicine/getallmedicine/getallmedicine';
import { CreateMedicine } from './components/medicine/createmedicine/createmedicine';
import { UpdateMedicine } from './components/medicine/updatemedicine/updatemedicine';

// PAYMENT
import { GetallPayment } from './components/payment/getallpayment/getallpayment';
import { CreatePayment } from './components/payment/createpayment/createpayment';
import { UpdatePayment } from './components/payment/updatepayment/updatepayment';

// PRESCRIPTION
import { GetallPrescription } from './components/prescription/getallprescription/getallprescription';
import { CreatePrescription } from './components/prescription/createprescription/createprescription';
import { UpdatePrescription } from './components/prescription/updateprescription/updateprescription';

// PROCEDURE
import { GetallProcedure } from './components/procedure/getallprocedure/getallprocedure';
import { CreateProcedure } from './components/procedure/createprocedure/createprocedure';
import { UpdateProcedure } from './components/procedure/updateprocedure/updateprocedure';

// VACCINE
import { GetallVaccine } from './components/vaccine/getallvaccine/getallvaccine';
import { CreateVaccine } from './components/vaccine/createvaccine/createvaccine';
import { UpdateVaccine } from './components/vaccine/updatevaccine/updatevaccine';

// VACCINEAPPLICATION
import { GetallVaccineApplication } from './components/vaccineapplication/getallvaccineapplication/getallvaccineapplication';
import { CreateVaccineApplication } from './components/vaccineapplication/createvaccineapplication/createvaccineapplication';
import { UpdateVaccineApplication } from './components/vaccineapplication/updatevaccineapplication/updatevaccineapplication';

// VETERINARIAN 
import { GetallVeterinarian } from './components/veterinarian/getallveterinarian/getallveterinarian';
import { CreateVeterinarian } from './components/veterinarian/createveterinarian/createveterinarian';
import { UpdateVeterinarian } from './components/veterinarian/updateveterinarian/updateveterinarian';



export const routes: Routes = [
  // 1 OWNER
  { path: 'owners', component: Getall },
  { path: 'owners/nuevo', component: CreateOwner },
  { path: 'owners/editar/:id', component: UpdateOwner },

  // 2 PET
  { path: 'pets', component: GetallPet },
  { path: 'pets/nuevo', component: CreatePet },
  { path: 'pets/editar/:id', component: UpdatePet },

  // 3 APPOINTMENT
  { path: 'appointments', component: GetallAppointment },
  { path: 'appointments/nuevo', component: CreateAppointment },
  { path: 'appointments/editar/:id', component: UpdateAppointment },

  // 4 LABORATORY
  { path: 'laboratories', component: GetallLaboratory },
  { path: 'laboratories/nuevo', component: CreateLaboratory },
  { path: 'laboratories/editar/:id', component: UpdateLaboratory },

  // 5 MEDICALHISTORY
  { path: 'medicalhistories', component: GetallMedicalHistory },
  { path: 'medicalhistories/nuevo', component: CreateMedicalHistory },
  { path: 'medicalhistories/editar/:id', component: UpdateMedicalHistory },

  // 6 MEDICINE
  { path: 'medicines', component: GetallMedicine },
  { path: 'medicines/nuevo', component: CreateMedicine },
  { path: 'medicines/editar/:id', component: UpdateMedicine },

  // 7 PAYMENT
  { path: 'payments', component: GetallPayment },
  { path: 'payments/nuevo', component: CreatePayment },
  { path: 'payments/editar/:id', component: UpdatePayment },

  // 8 PRESCRIPTION
  { path: 'prescriptions', component: GetallPrescription },
  { path: 'prescriptions/nuevo', component: CreatePrescription },
  { path: 'prescriptions/editar/:id', component: UpdatePrescription },

  // 9 PROCEDURE
  { path: 'procedures', component: GetallProcedure },
  { path: 'procedures/nuevo', component: CreateProcedure },
  { path: 'procedures/editar/:id', component: UpdateProcedure },

  // 10 VACCINE
  { path: 'vaccines', component: GetallVaccine },
  { path: 'vaccines/nuevo', component: CreateVaccine },
  { path: 'vaccines/editar/:id', component: UpdateVaccine },

  // 11 VACCINEAPPLICATION
  { path: 'vaccineapplications', component: GetallVaccineApplication },
  { path: 'vaccineapplications/nuevo', component: CreateVaccineApplication },
  { path: 'vaccineapplications/editar/:id', component: UpdateVaccineApplication },

  // 12 VETERINARIAN
  { path: 'veterinarians', component: GetallVeterinarian }, 
  { path: 'veterinarians/nuevo', component: CreateVeterinarian },
  { path: 'veterinarians/editar/:id', component: UpdateVeterinarian }

];

