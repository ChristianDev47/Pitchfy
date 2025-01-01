import { z } from "zod";

// Full payment form validation schema
export const paymentFormSchema = z.object({
  firstname: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  address: z.string().min(1, "Address is required."),
  city: z.string().min(1, "City is required."),
  state: z.string().min(1, "State is required."),
  zip: z.string().min(1, "ZIP code is required."),
});
