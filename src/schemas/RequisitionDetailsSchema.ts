import * as Yup from 'yup';

const RequisitionDetailsSchema:any = Yup.object().shape({
  requisitionTitle: Yup.string().required('Requisition Title is required'),
  numberOfOpenings: Yup.string()
    .matches(/^\d+$/, 'Number of Openings must be a valid number')
    .required('Number of Openings is required'),
  gender: Yup.string().required('Gender is required'),
  urgency: Yup.string().required('Urgency is required'),
});

export type RequisitionDetailsSchemas = Yup.InferType<typeof RequisitionDetailsSchema>;