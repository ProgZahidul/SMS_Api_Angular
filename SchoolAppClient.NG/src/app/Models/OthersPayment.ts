import { OtherPaymentDetail } from "./OtherPaymentDetail";
import { Student } from "./Student";

export class OthersPayment {
  othersPaymentId!: number;
  studentId!: number;
  totalAmount!: number;
  amountPaid!: number;
  amountRemaining!: number;
  paymentDate!: Date;
  student!: Student; 
  fees: { feeId: number }[] = [];
  otherPaymentDetails: OtherPaymentDetail[]=[];
}
