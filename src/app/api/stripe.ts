import { loadStripe } from "@stripe/stripe-js";

const publishable_key = "pk_test_51Qu0VHPUdz2Zv0MfQVNyngABRD7ysXHBV8uQuXX9bF7iEMuoO97CDJ8MmwCRikcfLM2IrI7QKQiImpY6ieJfn36b001cheXo1R"
const stripePromise = loadStripe(publishable_key);