import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(1, 'contact.errors.nameRequired'),
  email: z.string().min(1, 'contact.errors.emailRequired').email('contact.errors.emailInvalid'),
  company: z.string().optional(),
  message: z.string().min(1, 'contact.errors.messageRequired').min(10, 'contact.errors.messageMin'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
