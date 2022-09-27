import { yup } from '@/infra/validators'

export const updateShortenerUrlSchema = yup.object({
  appointmentId: yup
    .string()
    .required('O atributo [ appointmentId ] é obrigatório no path')
    .nullable(false),
  ShortenerUrl: yup
    .boolean()
    .required('O atributo [ updateShortenerUrl ] do form é obrigatório no corpo')
    .nullable(false)
})

export type UpdateShortenerUrlSchema = yup.InferType<typeof updateShortenerUrlSchema>