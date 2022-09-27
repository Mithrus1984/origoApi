import { yup } from '@/infra/validators'

export const insertShortenerUrlSchema = yup.object({
  appointmentId: yup
    .string()
    .required('O atributo [ appointmentId ] é obrigatório no path')
    .nullable(false),
  shortenerUrl: yup
    .boolean()
    .required('O atributo [ shortenerUrl ] do form é obrigatório no corpo')
    .nullable(false)
})

export type InsertShortenerUrlSchema = yup.InferType<typeof insertShortenerUrlSchema>
