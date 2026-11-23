/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */

interface Patient {
  name: string;
  department: string;
  isAdmitted: boolean;
  bill: number;
}

const patients: Patient[] = [
  { name: "Andi Pratama", department: "Cardiology", isAdmitted: true, bill: 4500000 },
  { name: "Siti Aminah", department: "Neurology", isAdmitted: false, bill: 1200000 },
  { name: "Budi Santoso", department: "Orthopedics", isAdmitted: true, bill: 6800000 },
  { name: "Dewi Lestari", department: "Cardiology", isAdmitted: false, bill: 2100000 },
  { name: "Rizky Ramadhan", department: "Pediatrics", isAdmitted: true, bill: 3200000 },
  { name: "Nadia Putri", department: "Neurology", isAdmitted: false, bill: 1750000 }
];

function countTotalPatients(list: Patient[]): number {
  return list.length;
}

function countAdmittedPatients(list: Patient[]): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isAdmitted) {
      count++;
    }
  }
  return count;
}

function countDischargedPatients(list: Patient[]): number {
  return countTotalPatients(list) - countAdmittedPatients(list);
}

function countPatientsByDepartment(list: Patient[], department: string): number {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].department === department) {
      count++;
    }
  }
  return count;
}

function findHighestBill(list: Patient[]): number {
  if (list.length === 0) return 0;
  let highest = list[0].bill;
  for (let i = 1; i < list.length; i++) {
    if (list[i].bill > highest) {
      highest = list[i].bill;
    }
  }
  return highest;
}

function findLowestBill(list: Patient[]): number {
  if (list.length === 0) return 0;
  let lowest = list[0].bill;
  for (let i = 1; i < list.length; i++) {
    if (list[i].bill < lowest) {
      lowest = list[i].bill;
    }
  }
  return lowest;
}

function calculateTotalRevenue(list: Patient[]): number {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total += list[i].bill;
  }
  return total;
}

function calculateAverageBill(list: Patient[]): number {
  if (list.length === 0) return 0;
  return calculateTotalRevenue(list) / countTotalPatients(list);
}

function getAdmittedPatientNames(list: Patient[]): string[] {
  const names: string[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].isAdmitted) {
      names.push(list[i].name);
    }
  }
  return names;
}

function printHospitalReport(list: Patient[]): void {
  console.log("Total patients: " + countTotalPatients(list));
  console.log("Total admitted patients: " + countAdmittedPatients(list));
  console.log("Total discharged patients: " + countDischargedPatients(list));
  console.log("Cardiology patients: " + countPatientsByDepartment(list, "Cardiology"));
  console.log("Neurology patients: " + countPatientsByDepartment(list, "Neurology"));
  console.log("Orthopedics patients: " + countPatientsByDepartment(list, "Orthopedics"));
  console.log("Pediatrics patients: " + countPatientsByDepartment(list, "Pediatrics"));
  console.log("Highest hospital bill: Rp" + findHighestBill(list));
  console.log("Lowest hospital bill: Rp" + findLowestBill(list));
  console.log("Average hospital bill: Rp" + calculateAverageBill(list));
  console.log("Total hospital revenue: Rp" + calculateTotalRevenue(list));
  console.log("Admitted patients: " + getAdmittedPatientNames(list).join(", "));
}

printHospitalReport(patients);